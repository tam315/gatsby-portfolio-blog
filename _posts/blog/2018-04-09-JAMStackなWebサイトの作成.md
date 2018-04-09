---
layout: blog
title: JAM StackなWebサイトの作成
date: '2018-04-09T15:00:00+09:00'
---

新しくWebサイトを作成する機会があり、せっかくなので [JAM Stack](https://jamstack.org/) と呼ばれる手法で構築してみました。JAM Stackは、JS+API+Markupで構成されるサーバレスな枠組みです。

## JAM Stackとは
### 特徴
* フロントエンドがバックエンドから完全に分離されている
* [Static Site Generator](https://www.staticgen.com/) を用いるなどして、事前に静的ファイル（HTML、JS）をビルドする
* 画面描写は基本的にJSのみで行う
* ビルドしたファイルは全て CDN で配布する
* すべてのプロジェクトデータは Git 上で管理する
* Babel, PostCSS, Webpackなど最新のビルドツールを使う
* 自動ビルド・自動デプロイ
* サーバサイドの機能が必要な時はAjaxでAPIをたたく

### メリット
* 高パフォーマンス
* 高セキュリティ
* スケーリングが容易で安価
* デベロッパフレンドリー

### デメリット
* クライアントとサーバが強く結びついているサーバサイドwebアプリには原則として適用できない

## 今回構築したWebサイトについて

### URL
<a href="https://www.yuuniworks.com" target="_blank">https://www.yuuniworks.com</a>

### 構成図
<img src="/images/uploads/illust.svg" />

### 特徴
標準的な JAM Stack の構成に加え、下記の二つの機能を追加しています。

* Netlify CMS による GUI を用いたコンテンツ編集機能
* 問合せメール送信機能（API側はAWS API Gateway+Lambda+SESで実装）

### 使用したソフトウェア・サービス等
|Name|Description|
|-|-|
|React|UI|
|Gatsby|Static Site Generator|
|AWS(API, Lambda, SES)|問合せメール送信用API|
|Netlify|CI/CD|
|NetlifyCMS|CMS|

## 所感
グローバルなドキュメントサイトや、サーバサイドにそれほど複雑な機能を必要としないコーポレートサイトなどに適した手法だと思います。

なにより、`git push` だけで世界中のCDNに静的ファイルが配置できるのも、開発者に優しくてよいです。

## 参考
* [Gatsbyの使い方](https://www.gatsbyjs.org/tutorial/)
* [NetlifyでCI/CD環境を構築する方法](https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/)
* [Netlify CMSのGatsbyへの実装方法](https://www.netlifycms.org/docs/add-to-your-site/)
* [AWS Lambdaで静的サイトにメール送信フォームを作る簡単な方法](https://blog.craftz.dog/aws-lambda%E3%81%A7%E9%9D%99%E7%9A%84%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AB%E3%83%A1%E3%83%BC%E3%83%AB%E9%80%81%E4%BF%A1%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E3%82%92%E4%BD%9C%E3%82%8B%E7%B0%A1%E5%8D%98%E3%81%AA%E6%96%B9%E6%B3%95-de8cba5e50a5)
