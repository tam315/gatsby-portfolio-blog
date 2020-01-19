import Link from 'gatsby-link';
import React from 'react';
import ReactTooltip from 'react-tooltip';
import IconExtLink from '../components/IconExtLink';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import WhiteBox from '../components/WhiteBox';
import jissekiCompare from '../images/jisseki-compare.png';
import jissekiNote from '../images/jisseki-note.png';
import jissekiPict from '../images/jisseki-pict.png';
import jissekiRebalancer from '../images/jisseki-rebalancer.jpg';
import jissekiTravelrPng from '../images/jisseki-travelr.png';
import jissekiYuuniJpg from '../images/jisseki-yuuni.jpg';
import { rhythm } from '../utils/typography';

const PerformanceSection = () => {
  const performances = [
    {
      name: 'react-compare-image',
      description: 'Image comparison tool.',
      techStack: [{ name: 'React', description: 'UI' }],
      webpageURL: 'https://www.npmjs.com/package/react-compare-image',
      githubURL: 'https://github.com/junkboy0315/react-compare-image',
      imgPath: jissekiCompare,
    },
    {
      name: 'Pairwise Pict Online',
      description: 'Generating pairwise testcases online.',
      techStack: [
        { name: 'create-react-app', description: 'Front-end Framework' },
        { name: 'CircleCI', description: 'CI/CD' },
        { name: 'GCP Cloud Build', description: 'CI/CD' },
        { name: 'GCP Cloud Run', description: 'コンテナ管理' },
        { name: 'Node.js', description: 'APIサーバ' },
      ],
      webpageURL: 'https://pairwise.yuuniworks.com',
      githubURL: 'https://github.com/junkboy0315/pairwise-pict-online',
      imgPath: jissekiPict,
    },
    {
      name: 'Portfolio Rebalancer',
      description: 'Rebalance your assets.',
      techStack: [
        { name: 'Vue.js/Vuex', description: 'UI/State管理' },
        { name: 'Nuxt.js', description: 'Vue.jsフレームワーク' },
        { name: 'Bulma', description: 'CSSライブラリ' },
        { name: 'Firebase Auth', description: '認証管理' },
        { name: 'Firebase Firestore', description: 'データベース' },
      ],
      webpageURL: 'http://rebalancer.yuuniworks.com',
      githubURL: 'https://github.com/junkboy0315/rebalancer',
      imgPath: jissekiRebalancer,
    },
    {
      name: 'Travelr',
      description: 'Compare old and new images.',
      techStack: [
        { name: 'React/Redux', description: 'UI/State管理' },
        { name: 'material-ui', description: 'UIライブラリ' },
        { name: 'Workbox', description: 'PWA対応' },
        { name: 'jest/enzyme', description: 'テスト' },
        {
          name: 'Firebase',
          description: '認証管理、ストレージ、ファンクション',
        },
        { name: 'GCP Cloud SQL', description: 'データベース' },
      ],
      webpageURL: 'http://travelr.yuuniworks.com',
      githubURL: 'https://github.com/junkboy0315/travelr',
      blogPath: '/blog/2018-07-31-デモシステムを作成しました/',
      imgPath: jissekiTravelrPng,
    },
    {
      name: 'Yuuniworks Notes',
      description: 'My note by vuepress.',
      techStack: [
        { name: 'VuePress', description: 'Static Site Generator' },
        { name: 'Algolia DocSearch', description: '高度な全文検索' },
      ],
      webpageURL: 'https://note.yuuniworks.com',
      githubURL: 'https://github.com/junkboy0315/markdown-notes',
      imgPath: jissekiNote,
    },
    {
      name: 'Yuuniworks Web',
      description: 'This website.',
      techStack: [
        { name: 'Gatsby', description: 'Static Site Generator' },
        { name: 'GraphQL', description: 'クエリ言語' },
        { name: 'AWS Lambda', description: '問い合わせフォーム用バックエンド' },
        { name: 'AWS SES', description: '問い合わせフォーム用バックエンド' },
        { name: 'Netlify CMS', description: 'CMS' },
        { name: 'Sentry', description: 'クライアントサイドのエラー収集' },
      ],
      webpageURL: 'https://www.yuuniworks.com',
      githubURL: 'https://github.com/junkboy0315/yuuni-web',
      blogPath: '/blog/2018-04-09-jamstackなwebサイトの作成/',
      imgPath: jissekiYuuniJpg,
    },
  ];

  const styles = {
    grid: {
      display: 'grid',
      gridGap: rhythm(2),
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 350px))',
      justifyContent: 'center',
      margin: 'auto',
      maxWidth: 1200,
    },
    whiteBox: {
      padding: rhythm(1),
    },
    itemImage: {
      border: '1px solid #aaa',
      objectFit: 'cover',
      height: '160px',
      width: '100%',
      filter: 'brightness(95%) grayscale(30%)',
    },
    itemTitle: {
      color: '#262626',
      display: 'block',
      fontWeight: 'bold',
      margin: '1rem 0',
      textDecoration: 'none',
    },
    description: {
      fontSize: '0.8rem',
      marginBottom: '0.8rem',
    },
    externalLink: {
      color: '#999',
      fontSize: '0.8rem',
      textDecoration: 'none',
      marginRight: '1rem',
      ':hover': {
        background: '#eee',
      },
    },
    techStackGrid: {
      borderTop: '1px dotted #999',
      display: 'grid',
      fontSize: '0.8rem',
      gridGap: '0.4rem',
      gridTemplateColumns: '1fr 1fr',
      marginTop: '0.8rem',
      paddingTop: '1rem',
      ' > span': {
        cursor: 'default',
      },
      ' > span::before': {
        content: '- ',
      },
    },
  };

  return (
    <SectionContainer id="performance">
      <SectionHeader text="Performance" colorNumber="1" />

      {/* Grid start */}
      <div css={styles.grid}>
        {performances.map(performance => (
          <WhiteBox key={performance.name} css={styles.whiteBox}>
            <a
              href={performance.webpageURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={performance.imgPath}
                css={styles.itemImage}
                alt={performance.name}
              />
            </a>

            <a
              href={performance.webpageURL}
              target="_blank"
              rel="noopener noreferrer"
              css={styles.itemTitle}
            >
              {performance.name}
              <IconExtLink />
            </a>

            <p css={styles.description}>{performance.description}</p>

            {performance.githubURL ? (
              <a
                href={performance.githubURL}
                target="_blank"
                rel="noopener noreferrer"
                css={styles.externalLink}
              >
                Source codes
              </a>
            ) : (
              <div style={{ color: 'transparent' }}>_</div>
            )}

            {performance.blogPath && (
              <Link
                to={performance.blogPath}
                target="_blank"
                css={styles.externalLink}
              >
                Related articles
              </Link>
            )}

            <ul css={styles.techStackGrid}>
              {performance.techStack.map(tech => (
                <span
                  data-for={tech.name + tech.description}
                  data-tip
                  key={tech.name}
                >
                  {tech.name}
                  <ReactTooltip
                    id={tech.name + tech.description}
                    effect="solid"
                  >
                    {tech.description}
                  </ReactTooltip>
                </span>
              ))}
            </ul>
          </WhiteBox>
        ))}
      </div>
      {/* Grid end */}
    </SectionContainer>
  );
};

export default PerformanceSection;
