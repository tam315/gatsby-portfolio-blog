---
layout: blog
title: LambdaでGithubのアクセストークンを取得する
summary: サーバレス環境でGithubのアクセストークンを取得するために、Lambdaを活用しました。
date: '2018-05-01T19:03:56+09:00'
dateModified: '2018-05-01T19:03:56+09:00'
thumbnail: /blogImages/20180501.png
---
## アクセストークンの取得

OAuthをWebアプリに実装する際、まずアクセストークンを取得する必要があります。

GoogleやFacebookの場合、SDKを使ってフロントエンド側だけで取得できます。
下記のような便利なコンポーネントもあり、頻繁に更新されています。

- [react-google-login](https://github.com/anthonyjgrove/react-google-login)
- [react-facebook-login](https://github.com/keppelen/react-facebook-login)

ところが、Githubの場合はフロントエンド側だけではトークンを取得できません。
サーバが存在することを前提に認証を行う枠組みになっているためです。

## GithubのOAuth認証の動き
Githubの場合は、認証画面からリダイレクトで戻ってきたとき、トークンではなく`code`というものを渡されます。
基本的には、この`code`を下記のAPIにPOSTしてやれば、トークンが取得できます。

```
POST https://github.com/login/oauth/access_token
```

ところが、このエンドポイントにはCORSが設定されていないため、フロントエンドから取得するとエラーがでます。

サーバ側で`code`をトークンと交換する処理をしなさい、ということなのでしょう。
しかし、Webアプリをサーバレスで運用している場合は、トークンが取得できないということになります。
バッドノウハウで無理矢理取得できないこともないのですが、美しくありません。

## Lambdaでアクセストークンを取得

この問題を解決するため、今回はLambda Functionを作成して対応しました。

- [github-token-getter](https://github.com/junkboy0315/github-token-getter)

Githubから受けとった`code`をparamに付与してGETを叩けば、トークンが返ってくるという単純なものです。

![Lambdaを使ったGithubのOAuthの流れ](/blogImages/20180501.png)

叩く
```
GET https://your.api.gateway/getToken?code=CODE_FROM_GITHUB
```

トークン帰ってくる
```
{ "accessToken": "a1b2c3........" }
```

なお、CODEを取得するまでの処理は、下記のコンポーネントを使うと便利です。
- [react-github-login](https://github.com/checkr/react-github-login)

## 参考
- [(Github) Authorization options for OAuth Apps](https://developer.github.com/apps/building-oauth-apps/authorization-options-for-oauth-apps/#web-application-flow)
