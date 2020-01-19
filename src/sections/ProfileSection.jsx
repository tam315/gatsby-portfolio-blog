import React from 'react';
import AgeCalculator from '../components/AgeCalculator';
import Hr from '../components/Hr';
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
      width: '200px',
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
      <SectionHeader text="Profile" colorNumber="2" />

      <div css={styles.container}>
        <WhiteBox css={styles.whiteBox}>
          <h3 css={styles.h3}>Summary</h3>
          <div css={styles.gaiyouPictureContainer}>
            <img src={profileJpg} css={styles.gaiyouPicture} alt="me" />
          </div>

          <div css={styles.gaiyouListItem}>
            <div css={styles.gaiyouItemName}>
              <b>Name</b>
            </div>
            <div css={styles.gaiyouItemContent}>John Doe</div>
          </div>

          <div css={styles.gaiyouListItem}>
            <div css={styles.gaiyouItemName}>
              <b>Age</b>
            </div>
            <div css={styles.gaiyouItemContent}>
              <AgeCalculator birthday="1985-03-15T15:00+09:00" />
            </div>
          </div>

          <div css={styles.gaiyouListItem}>
            <div css={styles.gaiyouItemName}>
              <b>Residence</b>
            </div>
            <div css={styles.gaiyouItemContent}>East of Japan</div>
          </div>

          <div css={styles.gaiyouListItem}>
            <div css={styles.gaiyouItemName}>
              <b>Hobby</b>
            </div>
            <div css={styles.gaiyouItemContent}>Fixing cars</div>
          </div>

          <div css={styles.gaiyouListItem}>
            <div css={styles.gaiyouItemName}>
              <b>Motto</b>
            </div>
            <div css={styles.gaiyouItemContent}>
              Everything&#39;s gonna be codes
            </div>
          </div>
        </WhiteBox>

        <WhiteBox css={{ ...styles.whiteBox, ...styles.whiteBoxKeireki }}>
          <h3 css={styles.h3}>Carrer</h3>

          <Hr />

          <p>
            <b>Freelance web developer</b>
            <br />
            <span css={styles.keirekiGray}>(2018.4 - )</span>
          </p>
          <p>some description goes here.</p>

          <Hr />

          <p>
            <b>System administrator</b>
            <br />
            <span css={styles.keirekiGray}>(2008.4 - 2018.3)</span>
          </p>
          <p>some description goes here.</p>

          <Hr text="long long story" />

          <p>
            <b>Elementary school</b>
            <br />
            <span css={styles.keirekiGray}>(1993)</span>
          </p>
          <p>
            I found MSX at my granpa&#39;s home and I realized that I should be
            a web developer.
          </p>
        </WhiteBox>

        <WhiteBox css={styles.whiteBox}>
          <h3 css={styles.h3}>Some</h3>
          <p>other content</p>
        </WhiteBox>
      </div>
    </SectionContainer>
  );
};

export default ProfileSection;
