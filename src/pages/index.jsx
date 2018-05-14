import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';
import { Link as LinkForScroll } from 'react-scroll';
import ReactTooltip from 'react-tooltip';
import AgeCalculator from '../components/AgeCalculator';
import Hr from '../components/Hr';
import IconExtLink from '../components/IconExtLink';
import ModalConductor from '../components/ModalConductor';
import SEO from '../components/SEO';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import Skill from '../components/Skill';
import WhiteBox from '../components/WhiteBox';
import '../css/global.css';
import arrowSvg from '../icons/arrow.svg';
import footerFacebookSvg from '../icons/footer-facebook.svg';
import footerFormSvg from '../icons/footer-form.svg';
import footerGithubSvg from '../icons/footer-github.svg';
import footerMailSvg from '../icons/footer-mail.svg';
import footerPhoneSvg from '../icons/footer-phone.svg';
import footerPinSvg from '../icons/footer-pin.svg';
import logoSvg from '../icons/logo.svg';
import questionSvg from '../icons/question.svg';
import jissekiShisanPng from '../images/jisseki-shisan.png';
import jissekiWarikanPng from '../images/jisseki-warikan.png';
import jissekiYuuniJpg from '../images/jisseki-yuuni.jpg';
import profileJpg from '../images/profile.jpg';
import topImageJpg from '../images/top-image.jpg';
import { rhythm } from '../utils/typography';

const TopSection = () => {
  const styles = {
    container: {
      alignItems: 'center',
      background: `#6292F1 url("${topImageJpg}") no-repeat center center`,
      backgroundSize: 'cover',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      justifyContent: 'center',
      paddingTop: '40px',
    },
    logo: {
      width: '450px',
      maxWidth: '80%',
    },
    description: {
      color: '#fff',
      textAlign: 'center',
    },
    arrow: {
      bottom: 0,
      cursor: 'pointer',
      marginBottom: '54px',
      position: 'absolute',
      width: '45px',
      animation: 'downArrow 0.8s ease-out infinite',
    },
  };

  return (
    <section id="top" css={styles.container}>
      <h1 css={styles.logo}>
        <img src={logoSvg} alt="Yuuniworksのロゴ" />
      </h1>
      <div css={styles.description}>
        <a
          href="https://goo.gl/maps/HjyoY7NJ9j92"
          css={{ color: 'white' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          島根県浜田市<IconExtLink color="#fff" />
        </a>を拠点に<br />
        フロントエンド開発のお手伝いをしている<br />
        フリーランスエンジニアです。
      </div>
      <LinkForScroll
        to="gaiyou"
        smooth
        duration={150}
        offset={-50}
        css={styles.arrow}
      >
        <img src={arrowSvg} alt="下向きの矢印" />
      </LinkForScroll>
    </section>
  );
};

const GaiyouSection = props => {
  const articles = [
    [
      '何ができる？',
      'SPA/PWA等の開発や、ServerlessなAPI開発を得意としています。',
    ],
    [
      '契約形態は？',
      '準委任契約による人的リソースの提供が可能です。内容によっては請負契約も可能です。',
    ],
    [
      '常駐できる？',
      '基本的にリモートワークを前提としておりますが、遠方での打ち合わせ等にも柔軟に対応いたします（交通費別途）。',
    ],
    [
      'いくらかかる？',
      'ご相談ください。期間や内容に応じたお見書を作成いたします。',
    ],
    ['いま仕事できる？', '2018年7月以降であればご相談可能です。'],
  ];

  const styles = {
    container: {
      margin: 'auto',
      maxWidth: '700px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
      gridGap: rhythm(1.5),
      padding: rhythm(1.5),
    },
    caret: {
      color: '#6292F1',
      marginRight: rhythm(1 / 8),
    },
    title: {
      fontWeight: 'bold',
      borderBottom: '1px dotted rgba(0,0,0,0.3)',
      marginBottom: rhythm(0.5),
    },
    button: {
      background: '#fff',
      border: '5px solid #6292F1',
      borderRadius: '7px',
      boxShadow:
        '0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12)',
      color: '#6292F1',
      display: 'block',
      margin: '60px auto 0',
      maxWidth: '100%',
      outline: 'none',
      padding: '15px 0',
      width: '300px',
      ':hover': {
        background: '#6292F1',
        color: '#fff',
        cursor: 'pointer',
      },
    },
  };

  return (
    <SectionContainer id="gaiyou">
      <SectionHeader text="概要" colorNumber="1" />

      <div css={styles.container}>
        <WhiteBox>
          <ul css={styles.grid}>
            {articles.map(article => (
              <li key={article[0]}>
                <div css={styles.title}>
                  <FontAwesomeIcon
                    icon="caret-square-right"
                    style={styles.caret}
                  />
                  {article[0]}
                </div>
                <div>{article[1]}</div>
              </li>
            ))}
          </ul>
        </WhiteBox>

        <button
          css={styles.button}
          onClick={() => props.setCurrentModal('CONTACT')}
        >
          お問い合わせ
        </button>
      </div>
    </SectionContainer>
  );
};

const SkillSection = props => {
  const styles = {
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 300px))',
      gridGap: rhythm(2),
      justifyContent: 'center',
      padding: rhythm(1),
      paddingTop: rhythm(2),
      paddingBottom: rhythm(2),
    },
    containerKihon: {
      position:
        'relative' /* 親要素をrelativeにしないと子(?マーク)がはみ出すため */,
    },
    helpButton: {
      color: '#999999',
      position: 'absolute',
      right: '5px',
      top: '20px',
      cursor: 'pointer',
      ' img': { width: '1.2rem' },
    },
    sonotaListItem: {
      marginBottom: rhythm(1),
    },
    sonotaTitle: {
      color: '#262626',
      fontWeight: 'bold',
    },
    sonotaContent: {
      marginTop: rhythm(1 / 4),
    },
    caret: {
      marginRight: rhythm(1 / 4),
      opacity: 0.8,
    },
    link: {
      color: '#262626',
      cursor: 'pointer',
      textDecorationLine: 'underline',
    },
  };

  const skills = {
    基本: {
      'Javascript (ES6)': 4,
      NodeJS: 4,
      'HTML 5': 4,
      'CSS 3': 4,
      DOM: 3,
      git: 3,
      'TDD/BDD': 3,
      Python: 2,
      Typescript: 2,
    },
    フロントエンド: {
      React: 4,
      Redux: 3,
      Bootstrap: 3,
      webpack: 2,
      PostCSS: 2,
      'Angular(2以降)': 2,
    },
    バックエンド: {
      'TCP/IP': 4,
      Docker: 3,
      RDBMS: 3,
      Swagger: 2,
      'AWS Lambda': 2,
      'AWS DynamoDB': 2,
      'AWS Cognito': 2,
      Nginx: 2,
      Kubernates: 2,
    },
    その他: [
      {
        title: 'スキルテスト',
        content: (
          <div>
            Paizaコーディング{' '}
            <a
              href="https://paiza.jp/guide/career#rank"
              css={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Aランク<IconExtLink />
            </a>
          </div>
        ),
      },
      {
        title: 'スキル習得方法',
        content: (
          <div
            onClick={() => props.setCurrentModal('UDEMY')}
            onKeyDown={e => {
              if (e.keyCode === 13) props.setCurrentModal('UDEMY');
            }}
            role="button"
            tabIndex={0}
          >
            Udemy（<span css={styles.link}>学習したコースの一覧</span>）
          </div>
        ),
      },
      {
        title: '言語',
        content: (
          <div>
            日本語<br />英語（○読む書く聞く、×話す）
          </div>
        ),
      },
      {
        title: '好きなツール',
        content: 'VSCode、HHKB Pro2',
      },
    ],
  };

  return (
    <SectionContainer id="skill" colorNumber="2" skew>
      <SectionHeader text="スキル" colorNumber="2" />
      <div>
        <WhiteBox maxWidth="850">
          <div css={styles.grid}>
            <div css={styles.containerKihon}>
              <h3>基本</h3>
              <div
                css={styles.helpButton}
                onClick={() => props.setCurrentModal('SKILL_HELP')}
                onKeyDown={e => {
                  if (e.keyCode === 13) props.setCurrentModal('SKILL_HELP');
                }}
                role="button"
                tabIndex={0}
              >
                <img src={questionSvg} alt="hint button" />
              </div>
              {Object.keys(skills['基本']).map(skill => (
                <Skill
                  skillName={skill}
                  skillLevel={skills['基本'][skill]}
                  key={skill}
                />
              ))}
            </div>

            <div>
              <h3>フロントエンド</h3>
              {Object.keys(skills['フロントエンド']).map(skill => (
                <Skill
                  skillName={skill}
                  skillLevel={skills['フロントエンド'][skill]}
                  key={skill}
                />
              ))}
            </div>

            <div>
              <h3>バックエンド</h3>
              {Object.keys(skills['バックエンド']).map(skill => (
                <Skill
                  skillName={skill}
                  skillLevel={skills['バックエンド'][skill]}
                  key={skill}
                />
              ))}
            </div>

            <div>
              <h3>その他</h3>
              <ul>
                {skills['その他'].map(item => (
                  <li css={styles.sonotaListItem} key={item.title}>
                    <div css={styles.sonotaTitle}>
                      <FontAwesomeIcon
                        icon="caret-square-right"
                        style={styles.caret}
                      />
                      {item.title}
                    </div>
                    <div css={styles.sonotaContent}>{item.content}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </WhiteBox>
      </div>
    </SectionContainer>
  );
};

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
        { name: 'Firebase', description: 'ホスティング' },
        { name: 'Jasmine', description: 'Unit/E2E Test' },
        { name: 'Protractor', description: 'E2E Test' },
        { name: 'Semaphore', description: 'CI/CD' },
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
    itemContainer: {
      padding: rhythm(1),
      paddingTop: 0,
    },
    itemTitle: {
      color: '#262626',
      display: 'block',
      fontWeight: 'bold',
      marginBottom: '1rem',
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
          <WhiteBox key={performance.name}>
            <a
              href={performance.webpageURL}
              target="_blank"
              css={styles.itemTitle}
            >
              <div
                css={{
                  // アスペクト比率を維持、かつ、画像で範囲全体をカバー、かつ、最も小さく表示
                  background: `url("${
                    performance.imgPath
                  }") no-repeat center center`,
                  backgroundSize: 'cover',
                  height: '160px',
                  border: '1px solid #aaa',
                  margin: rhythm(1),
                }}
              />
            </a>

            <div css={styles.itemContainer}>
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
              ) : null}

              {performance.blogPath ? (
                <Link
                  to={performance.blogPath}
                  target="_blank"
                  css={styles.externalLink}
                >
                  関連ブログ
                </Link>
              ) : null}

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
            </div>
          </WhiteBox>
        ))}
      </div>
      {/* グリッド終点 */}
    </SectionContainer>
  );
};

const ProfileSection = () => {
  const styles = {
    container: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',

      '@media (min-width:1000px)': {
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'center',
        marginRight: rhythm(-1),
      },
    },
    link: {
      color: '#262626',
    },
    boxOuterContainer: {
      marginBottom: rhythm(1),
      width: '100%',
      maxWidth: '375px',

      '@media (min-width:1000px)': {
        marginRight: rhythm(1),
      },
    },
    boxInnerContainer: {
      display: 'flex',
      flexDirection: 'column',
      padding: rhythm(1),
      paddingTop: 0,
    },
    h3: {
      marginTop: rhythm(2),
      marginBottom: rhythm(1.5),
    },
    gaiyouPictureContainer: {
      marginBottom: rhythm(1.5),
      textAlign: 'center',
    },
    gaiyouPicture: {
      width: '150px',
      borderRadius: '50%',
    },
    gaiyouListItem: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: rhythm(1),
    },
    gaiyouItemName: {
      flex: 2,
      textAlign: 'right',
      marginRight: '1rem',
    },
    gaiyouItemContent: {
      flex: 3,
    },
    keirekiGray: {
      color: '#999999',
    },
  };

  return (
    <SectionContainer id="profile" colorNumber="2" skew skewReverse>
      <SectionHeader text="プロフィール" colorNumber="2" />

      {/* Flex始点 */}
      <div css={styles.container}>
        <div css={styles.boxOuterContainer}>
          <WhiteBox height="auto">
            <div css={styles.boxInnerContainer}>
              <h3 css={styles.h3}>概要</h3>
              <div css={styles.gaiyouPictureContainer}>
                <img
                  src={profileJpg}
                  css={styles.gaiyouPicture}
                  alt="代表者のプロフィール写真"
                />
              </div>

              <div css={styles.gaiyouListItem}>
                <div css={styles.gaiyouItemName}>
                  <b>氏名</b>
                </div>
                <div css={styles.gaiyouItemContent}>田村 翔太</div>
              </div>

              <div css={styles.gaiyouListItem}>
                <div css={styles.gaiyouItemName}>
                  <b>年齢</b>
                </div>
                <div css={styles.gaiyouItemContent}>
                  <AgeCalculator birthday="1985-03-15T15:00+09:00" />
                </div>
              </div>

              <div css={styles.gaiyouListItem}>
                <div css={styles.gaiyouItemName}>
                  <b>居住地</b>
                </div>
                <div css={styles.gaiyouItemContent}>島根県浜田市</div>
              </div>

              <div css={styles.gaiyouListItem}>
                <div css={styles.gaiyouItemName}>
                  <b>趣味</b>
                </div>
                <div css={styles.gaiyouItemContent}>
                  <a
                    href="https://www.youtube.com/channel/UCbcCsHMZEjfsQZ5aaxNYNiw"
                    css={{ color: '#262626' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    バンド活動<IconExtLink />
                  </a>
                  <br />
                  車の修理
                </div>
              </div>

              <div css={styles.gaiyouListItem}>
                <div css={styles.gaiyouItemName}>
                  <b>座右の銘</b>
                </div>
                <div css={styles.gaiyouItemContent}>全てがコードになる</div>
              </div>
            </div>
          </WhiteBox>
        </div>

        <div css={styles.boxOuterContainer}>
          <WhiteBox height="auto">
            <div css={styles.boxInnerContainer}>
              <h3 css={styles.h3}>経歴</h3>

              <Hr />

              <p>
                <b>フリーランスエンジニア</b>
                <br />
                <span css={styles.keirekiGray}>(2018.4 - )</span>
              </p>
              <p>
                フリーランスエンジニアとして独立。Single Page
                Applicationの開発を中心に受託を行う。
                APIとフロントエンドが分離された美しく優しい世界を広めるべく、日々邁進中。
              </p>

              <Hr />

              <p>
                <b>システム管理者</b>
                <br />
                <span css={styles.keirekiGray}>(2008.4 - 2018.3)</span>
              </p>
              <p>
                自治体のIT部門において主にインフラ管理を担当。
                <a
                  href="https://www.nutanix.jp/company/customers/all-customers/hamada-city/"
                  target="_blank"
                  rel="noopener noreferrer"
                  css={styles.link}
                >
                  Nutanixによるプライベートクラウド基盤の構築<IconExtLink />
                </a>や、
                <a
                  href="https://jpn.nec.com/case/city.hamada/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  css={styles.link}
                >
                  SDNの導入<IconExtLink />
                </a>などを手がける。
              </p>
              <p>
                またプライベートにおいて、React、NodeJS、Docker、Kubernatesなどの技術を独学する。
              </p>

              <Hr text="(様々な紆余曲折)" />

              <p>
                <b>小学生</b>
                <br />
                <span css={styles.keirekiGray}>(1993)</span>
              </p>
              <p>
                なぜか祖父の家に置いてあったMSXに触れ、プログラミングの面白さに目覚める。これを一生の仕事にすることを決意する。
              </p>
            </div>
          </WhiteBox>
        </div>

        <div css={styles.boxOuterContainer}>
          <WhiteBox height="auto">
            <div css={styles.boxInnerContainer}>
              <h3 css={styles.h3}>商号の由来</h3>
              <p>
                「ゆうに」という言葉は島根県の石見地方で使われている方言で、以下の二つの意味を持っています。
              </p>
              <p>
                <b>1．いとも簡単に・たやすく</b>
                <br />例）ゆうにできらぁや<br />解）簡単にできますよ
              </p>
              <p>
                <b>2．ゆっくりと・ゆったりと</b>
                <br />例）ゆうに食べちゃんさいね<br />解）ゆっくり召し上がってくださいね
              </p>
              <p>
                Yuuniworksという商号には、「問題をさらっと鮮やかに解決して、のんびりとした人生を送る」という意味を込めています。
              </p>
            </div>
          </WhiteBox>
        </div>
      </div>
      {/* Flex終点 */}
    </SectionContainer>
  );
};

const BlogSection = () => {
  const styles = {
    link: {
      background: '#fff',
      border: '5px solid #6292F1',
      borderRadius: '7px',
      boxShadow:
        '0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12)',
      color: '#6292F1',
      display: 'block',
      margin: 'auto',
      maxWidth: '100%',
      outline: 'none',
      padding: '15px 0',
      textAlign: 'center',
      textDecoration: 'none',
      width: '300px',
      ':hover': {
        background: '#6292F1',
        color: '#fff',
        cursor: 'pointer',
      },
    },
  };

  return (
    <SectionContainer id="blog">
      <SectionHeader text="ブログ" colorNumber="1" />
      <Link to="/blog/" css={styles.link}>
        Yuuniworks Blog
      </Link>
    </SectionContainer>
  );
};

const FooterSection = props => {
  const footerInfo = [
    {
      imgPath: footerFormSvg,
      description: 'フォームでのお問い合わせ',
      onClick: () => props.setCurrentModal('CONTACT'),
    },
    {
      imgPath: footerMailSvg,
      description: 'info@yuuniworks.com',
      link: 'mailto:info@yuuniworks.com',
    },
    {
      imgPath: footerFacebookSvg,
      description: 'facebook.com/yuuniworks',
      link: 'https://www.facebook.com/yuuniworks/',
    },
    {
      imgPath: footerGithubSvg,
      description: 'github.com/junkboy0315',
      link: 'https://github.com/junkboy0315/',
    },
    {
      imgPath: footerPhoneSvg,
      description: '070 4398 9424',
      link: 'tel:07043989424',
    },
    {
      imgPath: footerPinSvg,
      description: '島根県浜田市金城町七条',
      link: 'https://goo.gl/maps/V5G3DJSYy8u',
    },
  ];

  const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      margin: 'auto',
      maxWidth: '850px',
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
    },
    ItemContainer: {
      alignItems: 'center',
      cursor: 'pointer',
      display: 'flex',
      height: rhythm(5 / 2),
    },
    image: {
      width: '30px',
      height: '30px',
      marginLeft: '40px',
    },
    description: {
      color: '#fff',
      marginBottom: 0,
      marginLeft: rhythm(1 / 2),
      width: '15rem',
    },
  };

  return (
    <SectionContainer id="contact" colorNumber="2" skew skewFillBottom>
      <SectionHeader text="お問い合わせ・ご連絡先" colorNumber="2" />

      <div css={styles.container}>
        {footerInfo.map(info => (
          <a
            href={info.link || null}
            onClick={info.onClick || null}
            css={styles.link}
            target="_blank"
            key={info.description}
          >
            <div css={styles.ItemContainer}>
              <img src={info.imgPath} css={styles.image} alt="" />
              <p css={styles.description}>{info.description}</p>
            </div>
          </a>
        ))}
      </div>
    </SectionContainer>
  );
};

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentModal: null,
    };

    this.setCurrentModal = this.setCurrentModal.bind(this);
  }

  setCurrentModal(target) {
    this.setState({
      currentModal: target,
    });
  }

  render() {
    return (
      <div>
        {this.state.currentModal ? (
          <ModalConductor
            currentModal={this.state.currentModal}
            setCurrentModal={this.setCurrentModal}
          />
        ) : null}

        <TopSection />
        <GaiyouSection setCurrentModal={this.setCurrentModal} />
        <SkillSection setCurrentModal={this.setCurrentModal} />
        <PerformanceSection />
        <ProfileSection />
        <BlogSection />
        <FooterSection setCurrentModal={this.setCurrentModal} />

        <SEO />
      </div>
    );
  }
}

GaiyouSection.propTypes = {
  setCurrentModal: PropTypes.func.isRequired,
};

SkillSection.propTypes = {
  setCurrentModal: PropTypes.func.isRequired,
};

FooterSection.propTypes = {
  setCurrentModal: PropTypes.func.isRequired,
};

export default IndexPage;
