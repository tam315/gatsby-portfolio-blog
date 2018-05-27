import React from 'react';
import AgeCalculator from '../components/AgeCalculator';
import Hr from '../components/Hr';
import IconExtLink from '../components/IconExtLink';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import WhiteBox from '../components/WhiteBox';
import profileJpg from '../images/profile.jpg';
import { rhythm } from '../utils/typography';

const ProfileSection = () => {
  const styles = {
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 350px))',
      gridGap: rhythm(2),
      justifyContent: 'center',
    },
    link: {
      color: '#262626',
    },
    whiteBox: {
      height: 'min-content',
      padding: rhythm(1),
      paddingTop: 0,
    },
    whiteBoxKeireki: {
      gridRowStart: 'span 2',
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

      <div css={styles.container}>
        <WhiteBox css={styles.whiteBox}>
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
        </WhiteBox>

        <WhiteBox css={{ ...styles.whiteBox, ...styles.whiteBoxKeireki }}>
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
        </WhiteBox>

        <WhiteBox css={styles.whiteBox}>
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
        </WhiteBox>
      </div>
    </SectionContainer>
  );
};

export default ProfileSection;
