---
layout: blog
title: Presentational ComponentとContainer Component
summary: Reduxを使うにあたって、どのようにコンポーネントの使い分けるか
date: '2018-05-18T09:45:12+09:00'
dateModified: '2018-05-18T09:45:12+09:00'
thumbnail: /blogImages/20180518.png
---
Reduxを使うにあたって、どのようにコンポーネントの使い分けるかということについて、下記のサイトが非常にわかりやすかったので、忘れないようにメモしておきます。
[https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

## コンポーネントにおける2つの分類
### Presentational Component
- 見た目に関する責任を負う。
- 子要素として、Presentational Component、Container Componentのどちらも持ちうる。
- DOMマークアップやスタイルを持つ。
- this.props.childrenを受け取る。
- 自分のコンポーネント以外のことについて依存しない。（例：FluxアクションやStoreなど）
- データを自身で勝手に読み込んだり、改変しない。
- データやコールバックは、親からPropsとして受け取る。
- Stateを持つことは少ない（持ったとしても、自身のUIに関する状態だけ）。
- Functional Componentとして書かれる。Component StateやLifecycle Hook、パフォーマンス調整の必要がなければ。
- 主な使用例：Page, Sidebar, Story, Userinfo, List

### Container Component
- アプリケーションの動作に関する責任を負う。
- 子要素として、Presentational Component、Container Componentのどちらも持ちうる。
- DOMマークアップやスタイルを持たない。
- データ及びデータを扱うためのファンクションをPresentational Componentに提供する。
- Flux Actionを発火する。また、発火するためのファンクションを子要素に提供する。
- Stateを持つ。データソースとして機能する。
- react-redux.connect()などのHOCを使って生成される。
- 主な使用例：UserPage, FollowersSidebar, StoryContainer, FollowedUserList

## 比較
以下、[redux公式サイト](https://redux.js.org/basics/usage-with-react)より。


||Presentational Components|Container Components|
|---|---|---
|目的|見た目<br>(markup, styles)|働き<br>(データ取得、stateのアップデート)|
|Redux|関係なし|関係あり|
|データの取得|props|Redux stateをsubscribe|
|データの変更|propsから取得したCallbackを使う|ReduxのactionsをDispatchする|
|作成方法|手動|React-Reduxのconnect()|

## この分け方にするメリット
- アプリケーション部分とUI部分を分離できる
- 再利用性が高い
- Containerに重複したレイアウトを記載しなくなる。（SidebarやPageといったレイアウトをPresentational Componentとして抽出することを強制される。Containerから、レイアウトコンポーネントに対してchildrenを渡してやるスタイル。）

## どのようにContainerを使い始めるか
Presentational Componentだけでアプリを作り始めるのがおすすめ。そのうち、データを親から受け取って子供に渡しているだけの、無駄に大きい中間コンポーネントが発生する。それをContainerにするとよい。とのこと。
