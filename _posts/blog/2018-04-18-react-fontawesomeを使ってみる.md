---
layout: blog
title: react-fontawesomeを使ってみる
summary: Font Awesomeのスピードを改善するため、react-fontawesomeを使ってみました。
date: '2018-04-18T10:18:57+09:00'
dateModified: '2018-04-18T10:18:57+09:00'
thumbnail: /blogImages/20180418.png
---
## スピードの問題

[Font Awesome](https://fontawesome.com/icons?d=gallery)にはよくお世話になります。Font Asewomeは通常下記のようにJSファイルを読み込んで使用します。

```html
<script src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>
```

しかし、この方法だとフォントが表示されるまでに時間もかかってしまいます。また、レンダリングをブロックするらしく、PageSpeed Toolsに改善事項として指摘されます。

![PageSpeed Toolsでの警告画面](/blogImages/20180418.png)

JSの読み込みを非同期にして改善する方法も検討したのですが、少し面倒そうです。

調べてみると、公式に[@fortawesome/react-fontawesome
](https://github.com/FortAwesome/react-fontawesome)というパッケージが出ており、これを使えば改善できそうだったので挑戦してみました。

## 使い方

react-fontawesomeでは、読み込むフォントを明示的に指定し、サブセットを作成してから使用することになっています。
こうすることで無駄なフォントを読み込まずに、速度を向上させています。

Font Awesomeには、solid, regular, light, brandsなど、いくつかの種類があります。
これらの種類のすべて読み込むこともできますし、指定した種類の特定のアイコンだけ読み込むこともできます。例えば下記のような感じです。

```jsx
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import brands from '@fortawesome/fontawesome-free-brands'
import faCheckSquare from '@fortawesome/fontawesome-free-solid/faCheckSquare'
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'
import faStar from '@fortawesome/fontawesome-free-solid/faStar';
import faStar2 from '@fortawesome/fontawesome-free-regular/faStar';

fontawesome.library.add(
    brands,
    faCheckSquare,
    faCoffee,
    faStar,
    faStar2,
)
```

上記の例では、「brands」のすべてのフォントと、「solid」や「regular」のうち特定の4つのアイコンを指定して、サブセットを作成しています。
サブセットを作成したら、あとは下記のように呼び出すことができます。

```jsx
const Beverage = () => (
    <div>
        <FontAwesomeIcon icon="check-square"/>
        Favorite beverage: <FontAwesomeIcon icon="coffee"/>

        // solid, regularなどを明示的に指定したい場合
        <FontAwesomeIcon icon={['fas', 'star']} />
        <FontAwesomeIcon icon={['far', 'star']} />
    </div>
)
```

毎回このような処理をコンポーネントごとに行うのは手間ですから、サブセット作成処理はレイアウトファイル等に記載しておくとよいでしょう。

react-fontawesomeを使用することで、フォントがあらかじめwebpackでバンドルされるため、表示されるまでのスピードは劇的に改善しました。
また、PageSpeed Toolsで改善事項として指摘されることもなくなりました。

## 参考
[react-fontawesome](https://github.com/FortAwesome/react-fontawesome)
