---
layout: blog
title: 'Google Fontsで`font-display:swap`が使えるように！'
summary: クエリパラメータで指定することが可能になりました。
date: 2019-05-14T05:36:39.770Z
dateModified: 2019-05-14T05:36:39.812Z
thumbnail: /blogImages/20180518.png
---

Google Fonts を使ったとき、CSS に`font-display: swap`が設定されていないために、フォントデータの読み込み中に文字が消えてしまうという問題がありました。

この問題、一筋縄ではいかなかったようで、[こちらの Issue](https://github.com/google/fonts/issues/358)でかれこれ 2 年あまり議論されていて、ずーーとウォッチしていました。

そして本日、とうとうこの機能が実装されたようです。
使い方は簡単で、`display=swap`をクエリパラメータに指定するだけです。

```jsx
<link
  href={
    'https://fonts.googleapis.com/css' +
    '?family=Noto+Sans+JP:400,700' +
    '&subset=japanese' +
    '&display=swap'
  }
  rel="stylesheet"
/>
```

特に日本語フォントを使う際は、かなり挙動が改善されそうです。これは結構嬉しい出来事でした。
