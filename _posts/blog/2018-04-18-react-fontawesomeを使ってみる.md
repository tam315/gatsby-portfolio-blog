---
layout: blog
title: react-fontawesomeを使ってみる
summary: Font Awesomeのスピードを改善するため、react-fontawesomeを使ってみました。
date: '2018-04-18T10:18:57+09:00'
dateModified: '2018-08-10T08:18:57+09:00'
thumbnail: /blogImages/20180418.png
---

※ 2018/08/10 `@fortawesome/react-fontawesome`が v0.0 から v0.1 にアップグレードされ、仕様が変わったので記事を更新しました

## スピードの問題

[Font Awesome](https://fontawesome.com/icons?d=gallery)にはよくお世話になります。Font Asewome は通常下記のように JS ファイルを読み込んで使用します。

```html
<script src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>
```

しかし、この方法だとフォントが表示されるまでに時間もかかってしまいます。また、レンダリングをブロックするらしく、PageSpeed Tools に改善事項として指摘されます。

![PageSpeed Toolsでの警告画面](/blogImages/20180418.png)

JS の読み込みを非同期にして改善する方法も検討したのですが、少し面倒そうです。

調べてみると、公式に[@fortawesome/react-fontawesome
](https://github.com/FortAwesome/react-fontawesome)というパッケージが出ており、これを使えば改善できそうだったので挑戦してみました。

## 使い方

react-fontawesome では、読み込むフォントを明示的に指定し、サブセットを作成してから使用することになっています。
こうすることで無駄なフォントを読み込まずに、速度を向上させています。

Font Awesome には、solid, regular, light, brands など、いくつかの種類があります。
これらの種類のすべて読み込むこともできますし、指定した種類の特定のアイコンだけ読み込むこともできます。例えば下記のような感じです。

```jsx
import { library } from '@fortawesome/fontawesome-svg-core';
import brands from '@fortawesome/free-brands-svg-icons';
import {
  faCheckSquare,
  faCoffee,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { faCalendarTimes } from '@fortawesome/free-regular-svg-icons';

library.add(brands, faCheckSquare, faCoffee, faStar, faCalendarTimes);
```

パッケージベンダ名は、@fontawesome ではなく @fo**r**tawesome なので注意してください。

上記の例では、「brands」のすべてのフォントと、「solid」や「regular」のうち特定の 4 つのアイコンを指定して、サブセットを作成しています。

毎回このような処理をコンポーネントごとに行うのは手間ですから、サブセット作成処理はレイアウトファイル等に記載しておくとよいでしょう。

サブセットを作成したら、あとは各コンポーネントから下記のように呼び出すことができます。

```jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Beverage = () => (
  <div>
    <FontAwesomeIcon icon="check-square" />
    Favorite beverage: <FontAwesomeIcon icon="coffee" />
    // solid, regularなどを明示的に指定したい場合
    <FontAwesomeIcon icon={['fas', 'star']} />
    <FontAwesomeIcon icon={['far', 'star']} />
  </div>
);
```

react-fontawesome を使用することで、フォントがあらかじめ webpack でバンドルされるため、表示されるまでのスピードは劇的に改善しました。
また、PageSpeed Tools で改善事項として指摘されることもなくなりました。

## 参考

[react-fontawesome](https://github.com/FortAwesome/react-fontawesome)
