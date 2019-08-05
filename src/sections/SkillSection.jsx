import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import IconExtLink from '../components/IconExtLink';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import Skill from '../components/Skill';
import WhiteBox from '../components/WhiteBox';
import questionSvg from '../icons/question.svg';
import { rhythm } from '../utils/typography';

const SkillSection = props => {
  const styles = {
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 350px))',
      gridGap: rhythm(2),
      justifyContent: 'center',
      maxWidth: '1200px',
      margin: 'auto',
    },
    whiteBox: {
      padding: rhythm(1.5),
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
      marginBottom: '1rem',
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
    フロントエンド: {
      'JavaScript / Typescript': 3,
      'React / Redux': 3,
      'Vue.js / Vuex': 3,
      'Jest/Enzyme': 3,
      'Material-UI': 3,
      'PWA / Workbox': 2,
      'Nuxt.js / Hugo / Gatsby': 2,
      GraphQL: 1,
      RxJS: 1,
    },
    バックエンド: {
      'AWS / GCP': 3,
      Docker: 3,
      'Python / Django / DRF': 3,
      RDBMS: 3,
      Go: 2,
      'Node.js': 2,
      'PHP / Laravel': 2,
      Firebase: 2,
      Kubernetes: 2,
    },
  };

  return (
    <SectionContainer id="skill" colorNumber="2" skew>
      <SectionHeader text="スキル" colorNumber="2" />
      <div css={styles.grid}>
        <WhiteBox css={styles.whiteBox}>
          <div>
            <h3>フロントエンド関連</h3>
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
            {Object.keys(skills['フロントエンド']).map(skill => (
              <Skill
                skillName={skill}
                skillLevel={skills['フロントエンド'][skill]}
                key={skill}
              />
            ))}
          </div>
        </WhiteBox>

        <WhiteBox css={styles.whiteBox}>
          <div>
            <h3>バックエンド関連</h3>
            {Object.keys(skills['バックエンド']).map(skill => (
              <Skill
                skillName={skill}
                skillLevel={skills['バックエンド'][skill]}
                key={skill}
              />
            ))}
          </div>
        </WhiteBox>

        <WhiteBox css={styles.whiteBox}>
          <div>
            <h3>その他</h3>
            <ul>
              <li css={styles.sonotaListItem}>
                <div css={styles.sonotaTitle}>
                  <FontAwesomeIcon
                    icon="caret-square-right"
                    style={styles.caret}
                  />
                  資格
                </div>
                <li css={styles.sonotaContent}>
                  <a
                    href="https://www.certmetrics.com/amazon/public/badge.aspx?i=9&t=c&d=2019-08-05&ci=AWS00969819"
                    css={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    AWS Certified Cloud Practitioner <IconExtLink />
                  </a>
                </li>
              </li>
              <li css={styles.sonotaListItem}>
                <div css={styles.sonotaTitle}>
                  <FontAwesomeIcon
                    icon="caret-square-right"
                    style={styles.caret}
                  />
                  言語
                </div>
                <li css={styles.sonotaContent}>日本語、英語</li>
              </li>
              <li css={styles.sonotaListItem}>
                <div css={styles.sonotaTitle}>
                  <FontAwesomeIcon
                    icon="caret-square-right"
                    style={styles.caret}
                  />
                  好きなツール
                </div>
                <li css={styles.sonotaContent}>VSCode, HHKB Pro2</li>
              </li>
            </ul>
          </div>
        </WhiteBox>
      </div>
    </SectionContainer>
  );
};

SkillSection.propTypes = {
  setCurrentModal: PropTypes.func.isRequired,
};

export default SkillSection;
