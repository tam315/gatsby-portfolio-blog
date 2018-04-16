---
layout: blog
title: react-helmetで構造化データを埋め込む
summary: react-helmetを使って構造化データ（JSON-LD）を埋め込む
date: '2018-04-16T17:52:16+09:00'
dateModified: '2018-04-16T17:52:16+09:00'
thumbnail: /blogImages/20180416.png
---
# 概要
SEO対策の一つに構造化データというものがあります。
Googleで検索した時に下記のようなスニペットが出てくることがあります。
![スニペットの例](/blogImages/20180416.png)

これは構造化データを使用しているそうです。Reactで動的にこれらのデータを埋め込んでで見ました。

```jsx
<Helmet
  script={[
    {
      type: 'application/ld+json',
      innerHTML:(JSON.stringify({
        '@context': 'http://schema.org',
        '@type' : 'Corporation',
        'name': 'Yuuniworks',
        'url' : 'http://www.yuuniworks.com/',
        'logo' : 'https://www.yuuniworks.com/images/logo_for_schema.png',
        'address': {
          'postalCode': '697-0000',
            'addressCountry': 'JP',
            'addressRegion': '島根県',
            'addressLocality': '松江市',
            'streetAddress': '殿町1番地',
        },
        "contactPoint": [
          { "@type": "ContactPoint",
            "telephone": '+81-90-1234-5678',
            "contactType": "sales",
          },
        ],
        'founder': {
          '@type': 'Person',
          'givenName': '太郎',
          'familyName': '山田',
        },
        'foundingDate': '2018-4-11',
        "description": "島根県浜田市を拠点に、主にフロントエンド開発のお手伝いをしているフリーランスエンジニアです。",
        "sameAs": [
          'https://www.facebook.com/yuuniworks/',
        ],
      })),
    },
  ]}
/>
```

```json
{ 
  "@context":"http://schema.org",
  "@type":"BlogPosting",
  "mainEntityOfPage":{ 
  "@type":"WebPage",
  "@id":"http://www.yuuniworks.com/blog/2018-04-09-JAMStackなWebサイトの作成/"
  },
  "headline":"JAM StackなWebサイトの作成",
  "image":[ 
  "https://www.yuuniworks.com/blogImages/20180409.png"
  ],
  "datePublished":"2018-04-09T15:00:00+09:00",
  "dateModified":"2018-04-16T17:00:00+09:00",
  "author":{ 
  "@type":"Person",
  "name":"Shota Tamura"
  },
  "publisher":{ 
  "@type":"Organization",
  "name":"Yuuniworks",
  "logo":{ 
  "@type":"ImageObject",
  "url":"https://www.yuuniworks.com/images/logo_for_schema.png"
  }
  },
  "description":"JS+API+Markupで構成されるサーバレスな枠組みで、自社のWebサイトを構築してみました。"
}
```

# 参考
* [構造化データテストツール by Google](https://search.google.com/structured-data/testing-tool/u/0/)
* [Schema.org](http://schema.org/docs/full.html)
