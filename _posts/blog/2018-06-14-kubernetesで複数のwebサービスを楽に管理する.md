---
layout: blog
title: Kubernetesで複数のWebサービスを楽に管理する
summary: バーチャルホストと証明書自動更新の機能を実装し、Kubernetesで複数ドメインのWebサービスを楽に管理するための環境構築を行いました。
date: '2018-06-14T11:22:26+09:00'
dateModified: '2018-06-14T11:22:26+09:00'
thumbnail: /blogImages/20180614.png
---

複数ドメインの Web サービスを Kubernetes 上で楽に管理するための環境構築を行ったので、手順をメモしておきます。詳細は参考サイトに非常にわかりやすくまとまっているので、ご参照ください。なお、環境は Google Kubernetes Engine を想定しています。

## 目標

- 複数の Web サービスとそれに紐付く Kubernetes サービスを、同一の IP で管理する

  →**Ingress のバーチャルホスト機能を使う**

- Let's Encrypt を使い、証明書の自動取得・更新を行う

  →**[cert-manager](https://cert-manager.readthedocs.io/en/latest/) を使う**

## Ingress Controller の選定

Ingress Contoller に、標準である[GLBC](https://github.com/kubernetes/ingress-gce)(GCE L7 load balancer controller)を使った場合と、
[Nginx Ingress Controller](https://github.com/kubernetes/ingress-nginx)を使った場合では、内部の動きが異なってきます。

GLBC を使った場合は、Ingress をデプロイすると自動的に **L7** ロードバランサが生成され、通信を終端します。この L7 ロードバランサを使って、ダイレクトにバックエンドサービスに通信を振り分けます。

一方、Nginx Ingress Controller を使った場合は、L7 ロードバランサは作成されません。代わりに nginx-ingress-controller というサービスが **L4** ロードバランサを生成し、通信を終端します。一旦、Nginx Ingress Controller が通信を受けて、Ingress Resource に問い合わせを行い、
改めて L7 レベルのルーティングを行う、という流れです（[参考サイト](https://cloud.google.com/community/tutorials/nginx-ingress-gke)に図が載っています）。この際、ingress の yaml に記載した内容は**単なる設定情報（Ingress Resource）**としてのみ機能します。

このあたりを理解するのはなかなか骨が折れますが、[こちらの記事](https://www.mkubaczyk.com/2017/12/13/kubernetes-ingress-controllers-nginx-gce-google-kubernetes-engine/)によくまとまっているので、興味のある方は見てみてください。

今回は Nginx Ingress Controller を選択しました。GLBC には、HTTP から HTTPS へのリダイレクトを行う機能がないためです。

なお、今回の構成では、設定情報はすべて Ingress Resource で管理するため、Nginx Ingress Controller は stateless であり、いつでも削除・再設置できます。

## 参考サイト

このページでやっていることは、下記の 2 つの記事をミックスしたものです。

- [1．標準の Ingress Contorller（GLBC）を使って証明書の自動取得をする](https://github.com/ahmetb/gke-letsencrypt)
- [2．Ingress Controller に nginx-ingress を使う](https://cloud.google.com/community/tutorials/nginx-ingress-gke)

## 手順

### 1. クラスタ環境の構築

Kubernetes クラスタはすでに構築されているものと仮定します。

### 2. helm のインストール

[helm](https://helm.sh/) は kubernetes 用のパッケージマネージャです。これを使うと、かなり楽に Kubernetes 上にパッケージをデプロイできます。

Helm は、クライアントサイドで動く`helm`コマンドと、Kubernetes 上で動く`Tiller`というサービス群の二つの要素から構成されています。まず、[helm のサイト](https://helm.sh/)から CLI バイナリをダウンロードし、パスを通しておきます。その上で、下記を実行します。

```powershell
# kube-systemネームスペースに、tillerというサービスアカウントを作成
kubectl create serviceaccount tiller --namespace kube-system

# tillerアカウントにcluster-adminの権限をバインドする（与える）
kubectl create clusterrolebinding tiller-binding `
  --clusterrole=cluster-admin `
  --serviceaccount=kube-system:tiller

# Tiller(helmのサーバサイドのサービス群)をデプロイする
helm init --upgrade --service-account tiller
```

これで、コマンド一発で Kubernetes にサービスをインストールできる環境が整いました。

### 3. nginx-ingress のインストール

nginx-ingress を helm を使ってインストールします。このコマンドにより、nginx-ingress に必要な各種の Deployment や Service が一括して作成されます。

```
helm install stable/nginx-ingress \
  --name nginx-ingress \
  --namespace kube-system \
  --set rbac.create=true
```

コマンドを実行すると、kube-system ネームスペースに、nginx-ingress-controller というサービスがロードバランサーとして作成されます。

すべてのドメインの名前解決先は、このロードバランサに向けるする必要があるため、固定 IP を設定しておきましょう。固定 IP の予約はプロバイダによって方法が異なりますが、GCP の場合は「VPC Network」→「External IP Address」から予約できます。

```sh
kubectl edit svc nginx-ingress-controller --namespace=kube-system
```

```yaml
# type: LoadBalancer の直下に下記を追加する
loadBalancerIP: "1.23.4.56"
```

### 4. DNS の設定変更

使用する予定のドメインを、nginx-ingress-controller サービスのロードバランサの IP に向かうように設定しておきましょう。IP は、`kubectl get svc nginx-ingress-controller --namespace=kube-system`で表示される`EXTERNAL-IP`です。

### 5. Ingress の仮設定

とりあえず、TLS を使わない形で Ingress を仮設定します。この段階で Ingress が必要な理由は、cert-manager が Let's Encrypt から証明書を取得する際に、Ingress Resource に認証用のパスを動的に追加する必要があるためです。

下記の例では、すでに`some-my-service`というサービス（公開したい Web アプリ）が設置されていると仮定しています。サービスは、`type:NodePort`で expose されている必要があるので、確認しておいてください。確認は、`kubectl get svc`で行えます。

バーチャルホストを使用する方式で記述していますので、ドメインを増やすときは、spec.rules の配下にドメインを追加していけば OK です。

```yaml
# my-ingress.yaml

apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: my-ingress
  annotations:
    # nginx-ingressを、Ingress Contollerとして使用する
    kubernetes.io/ingress.class: nginx
spec:
  rules:
  - host: some.dummy-url.com
    http:
      paths:
      - backend:
          serviceName: some-my-service
          servicePort: 80
```

```
kubectl apply -f my-ingress.yaml
```

### 6. cert-manager をインストール

下記のコマンドで cert-manager をインストールします。

```powershell
helm install --name cert-manager --version v0.3.1 `
    --namespace kube-system stable/cert-manager
```

### 7. ClusterIssuer の作成

LetsEncrypt を ClusterIssuer (証明書の発行者)として設定します。失敗を重ねるとペナルティを受ける場合があるみたいなので、テスト用と本番用を用意します。

```yaml
# cluster-issuer.yaml

apiVersion: certmanager.k8s.io/v1alpha1
kind: ClusterIssuer
metadata:
  name: letsencrypt-staging # テスト用
spec:
  acme:
    server: https://acme-staging-v02.api.letsencrypt.org/directory
    email: 'your@address.com'
    privateKeySecretRef:
      name: letsencrypt-staging
    http01: {}
---
apiVersion: certmanager.k8s.io/v1alpha1
kind: ClusterIssuer
metadata:
  name: letsencrypt-prod # 本番用
spec:
  acme:
    server: https://acme-v02.api.letsencrypt.org/directory
    email: 'your@address.com'
    privateKeySecretRef:
      name: letsencrypt-prod
    http01: {}
```

```
kubectl apply -f cluster-issuer.yaml
```

### 8. Certificate の作成、証明書の自動取得

下記の yaml を apply すると、cert-manager によって自動的に証明書の取得が始まります。10 分くらいかかります。

ここで何が起こっているかの詳細は、[こちらのページ](https://github.com/ahmetb/gke-letsencrypt/blob/master/50-get-a-certificate.md)を参照してください。簡潔に書くと、Ingress Resource に認証用の一時的なルール（パス）を動的に設定し、これを使って Let's Encrypt に認証をさせているようです。

```yaml
# certificate.yaml

apiVersion: certmanager.k8s.io/v1alpha1
kind: Certificate
metadata:
  name: some-dummyurl-tls # 証明書を格納するSecretにつける名前
  namespace: default
spec:
  secretName: some-dummyurl-tls # 証明書を格納するSecretにつける名前
  issuerRef:
    # ClusterIssuerを指定する。
    name: letsencrypt-staging
    kind: ClusterIssuer
  commonName: some.dummy-url.com # ドメイン
  dnsNames:
  - some.dummy-url.com # ドメイン
  acme:
    config:
    - http01:
        ingress: my-ingress # 使用しているIngressの名前
      domains:
      - some.dummy-url.com # ドメイン
```

```
kubectl apply -f certificate.yaml
```

証明書の取得状況は、`kubectl describe -f certificate.yaml`で随時確認できます。`Certificate issued successfully`などと表示されれば、証明書の取得は完了しています。結構時間がかかるので辛抱強さが必要です。

証明書の取得が完了すると、今回の場合は`some-dummyurl-tls`というシークレットに証明書が格納されます。

無事に取得ができることを確認できたら、上記の`letsencrypt-staging`を`letsencrypt-prod`に変更して、再度証明書を取得します。

### 9. TLS を使用する

取得した証明書を使うため、Ingress の設定を変更します。ドメインが増えた場合は、spec.tls と spec.rules の配下を追加することで対応します。

nginx-ingress の設定は、Ingress の設定の中で[annotation](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/)を使って管理できます。下記の例では、http を https へリダイレクトする設定を入れています。

```yaml
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: my-ingress
  annotations:
    kubernetes.io/ingress.class: nginx
    nginx.ingress.kubernetes.io/ssl-redirect: "true" # http=>httpsへリダイレクトする
spec:
  tls: # 取得した証明書を使って通信させる
  - secretName: some-dummyurl-tls
    hosts:
    - some.dummy-url.com
  rules:
  - host: some.dummy-url.com
    http:
      paths:
      - backend:
          serviceName: some-my-service
          servicePort: 80
```

もし、nginx-ingress の使用をやめて 標準の Ingress Controller である GLBC に戻したい場合は、下記の手順を行います。

- Ingress の定義を下記の通り変更し、再デプロイする。

  ```yaml
  # 下記の行を削除する
  kubernetes.io/ingress.class: nginx

  # もしくは下記の通り記述する（記載がない場合は暗黙的にgceが指定されますが、明示してもOK）
  kubernetes.io/ingress.class: gce
  ```

- DNS の向き先を GLBC(**L7** ロードバランサ)に変更する。IP は`kubectl get ingress`で取得できる。

なお、Ingress Controller の種類にかかわらず、設定情報は Ingress Resource によって抽象化されているため、cert-manager はどちらの環境でも問題なく動作します。

## 注意事項

- Ingress の設定は反映されるまでに 5 ～ 10 分程度かかります。エラーがでても、しばらくたつと問題なく動作していたりします。この点は、現状では我慢するしかありません。

## 所感

Kubernetes は 2 年ぶりぐらいに触りましたが、かなり進化していて嬉しくなりました。昨今、インフラがどんどん Stateless になっていくのを感じます。インフラの定義はコードになって、コマンド一発で同じ環境を再現できるようになりました。

また、今回の取り組みは、「どうやったら Kubernetes で複数の Web サービスを一括管理できるか？」と思い立ってから、上記の構成を構築するまで、たったの 1 日で完了させることができました。

いい時代です。
