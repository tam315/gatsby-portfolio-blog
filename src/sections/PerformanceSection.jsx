import Link from 'gatsby-link';
import React from 'react';
import ReactTooltip from 'react-tooltip';
import IconExtLink from '../components/IconExtLink';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import WhiteBox from '../components/WhiteBox';
import jissekiShisanPng from '../images/jisseki-shisan.png';
import jissekiWarikanPng from '../images/jisseki-warikan.png';
import jissekiYuuniJpg from '../images/jisseki-yuuni.jpg';
import { rhythm } from '../utils/typography';

const PerformanceSection = () => {
  const performances = [
    {
      name: 'Yuuniworks(このサイト)',
      description:
        'Single Page Applicationとして作成した、事業広報用Webページです。',
      techStack: [
        { name: 'React', description: 'UI' },
        { name: 'Gatsby', description: 'Static Site Generator' },
        {
          name: 'AWS API Gateway',
          description: '問い合わせフォーム用バックエンド',
        },
        { name: 'AWS Lambda', description: '問い合わせフォーム用バックエンド' },
        { name: 'AWS SES', description: '問い合わせフォーム用バックエンド' },
        { name: 'Netlify', description: 'ホスティング、CI/CD' },
        { name: 'Netlify CMS', description: 'CMS' },
        { name: 'Sentry', description: 'クライアントサイドのエラー収集' },
      ],
      webpageURL: 'http://www.yuuniworks.com',
      githubURL: 'https://github.com/junkboy0315/yuuni-web',
      blogPath: '/blog/2018-04-09-JAMStackなWebサイトの作成/',
      imgPath: jissekiYuuniJpg,
    },
    {
      name: 'SplitBills',
      description:
        '酔っぱらった状態で納得のいく割勘計算を行うための小道具です。',
      techStack: [
        { name: 'Angular4', description: 'Front-end Framework' },
        { name: 'Netlify', description: 'ホスティング' },
        { name: 'Jasmine', description: 'Unit/E2E Test' },
        { name: 'Protractor', description: 'E2E Test' },
        { name: 'Semaphore', description: 'CI/CD' },
        { name: 'Service Worker', description: 'オフライン対応' },
      ],
      webpageURL: 'http://split.yuuniworks.com',
      githubURL: 'https://github.com/junkboy0315/splitbills',
      imgPath: jissekiWarikanPng,
    },
    {
      name: '資産運用支援ツール（作成中）',
      description:
        '投資信託につきものである「リバランス」を楽に行うための支援ツールです。',
      techStack: [
        { name: 'React', description: 'UI' },
        { name: 'Redux', description: 'State Container' },
      ],
      imgPath: jissekiShisanPng,
    },
  ];

  const styles = {
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 350px))',
      gridGap: rhythm(2),
      justifyContent: 'center',
    },
    whiteBox: {
      padding: rhythm(1),
    },
    itemImage: {
      border: '1px solid #aaa',
      objectFit: 'cover',
      height: '160px',
      width: '100%',
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
      <SectionHeader text="実績" colorNumber="1" />

      {/* グリッド始点 */}
      <div css={styles.grid}>
        {performances.map(performance => (
          <WhiteBox key={performance.name} css={styles.whiteBox}>
            <a href={performance.webpageURL} target="_blank">
              <img
                src={performance.imgPath}
                css={styles.itemImage}
                alt={performance.name}
              />
            </a>

            <a
              href={performance.webpageURL}
              target="_blank"
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
                css={styles.externalLink}
              >
                ソースコード
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
                関連ブログ
              </Link>
            )}

            <ul css={styles.techStackGrid}>
              {performance.techStack.map(tech => (
                <span data-for={tech.name} data-tip key={tech.name}>
                  {tech.name}
                  <ReactTooltip id={tech.name} effect="solid">
                    {tech.description}
                  </ReactTooltip>
                </span>
              ))}
            </ul>
          </WhiteBox>
        ))}
      </div>
      {/* グリッド終点 */}
    </SectionContainer>
  );
};

export default PerformanceSection;
