---
layout: blog
title: Nuxt.js + Firestore によるアプリケーションの作成
summary: 資産運用におけるリバランス作業を支援する「Portfolio Rebalancer」というアプリケーションを作成しました。
date: 2018-10-18T04:25:43.357Z
dateModified: 2018-10-18T04:25:43.359Z
thumbnail: /blogImages/20181018-3.jpg
---

資産運用におけるリバランス作業を簡単にする、[Portfolio Rebalancer](https://rebalancer.yuuniworks.com/)
というアプリケーションを作成しました。

## 背景

突然ですが、金融資産の運用における基本的な流れは下記のようになります。

1.  投資対象とするアセットクラスを選ぶ（日本株式、グローバル株式、など）
1.  各アセットクラスの割合を決める（日本株式:20％、グローバル株式:80％、など）
1.  割合が崩れないよう、定期的に**リバランス**する

当方も 10 年前から資産運用を行っているのですが、3 番の**リバランス**の作業が、わりと面倒なのです。このたび、この作業を支援する「Portfolio Rebalancer」というアプリケーションを作成しました。

[https://rebalancer.yuuniworks.com/](https://rebalancer.yuuniworks.com/)

## 使い方

### アセットクラスの今の情報を入力します

![portfolio](/blogImages/20181018-1.jpg)

### 追加（or 売却）したい額を入力します

![rebalance setting](/blogImages/20181018-2.jpg)

### 結果が表示されます

![rebalance results](/blogImages/20181018-3.jpg)

## 作り方

下記の組み合わせで作成しており、サーバレスです。
特に、Nuxt.js での開発体験は、素晴らしいとしかいいようがありませんでした。

- Nuxt.js（Vue.js）
- Firebase (auth/firestore/functions)
- Bulma (CSS)
