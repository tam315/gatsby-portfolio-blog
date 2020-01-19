import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import Skill from '../components/Skill';
import WhiteBox from '../components/WhiteBox';
import questionSvg from '../icons/question.svg';

const SkillSection = props => {
  const styles = {
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 350px))',
      gridGap: '3rem',
      justifyContent: 'center',
      maxWidth: '1200px',
      margin: 'auto',
    },
    whiteBox: {
      padding: '2rem',
    },
    containerKihon: {
      position: 'relative',
    },
    helpButton: {
      color: '#999999',
      position: 'absolute',
      right: '0',
      top: '2px',
      outline: 'none',
      width: '15px',
      cursor: 'pointer',
      ' img': { width: '1.2rem' },
    },
    otherListItem: {
      marginBottom: '1rem',
    },
    sonotaTitle: {
      color: '#262626',
      fontWeight: 'bold',
    },
    sonotaContent: {
      marginTop: '.5rem',
    },
    caret: {
      marginRight: '.5rem',
      opacity: 0.8,
    },
    link: {
      color: '#262626',
      cursor: 'pointer',
      textDecorationLine: 'underline',
    },
    awsBadge: {
      width: '80px',
      marginRight: '0.5rem',
    },
  };

  const skills = {
    Frontend: {
      'JavaScript / Typescript': 3,
      'React / Redux': 3,
      'Vue.js / Vuex': 3,
      Jest: 3,
      'Next.js / Nuxt.js': 2,
      'PWA / Workbox': 2,
      GraphQL: 1,
      RxJS: 1,
    },
    Backend: {
      'AWS / GCP': 3,
      Docker: 3,
      'Node.js': 3,
      'Python / Django / DRF': 3,
      RDBMS: 3,
      Go: 2,
      Firebase: 2,
      Kubernetes: 2,
    },
  };

  return (
    <SectionContainer id="skill" colorNumber="2" skew>
      <SectionHeader text="Skills" colorNumber="2" />
      <div css={styles.grid}>
        <WhiteBox css={styles.whiteBox}>
          <div style={{ position: 'relative' }}>
            <h3>Frontend</h3>
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
            {Object.keys(skills.Frontend).map(skill => (
              <Skill
                skillName={skill}
                skillLevel={skills.Frontend[skill]}
                key={skill}
              />
            ))}
          </div>
        </WhiteBox>

        <WhiteBox css={styles.whiteBox}>
          <div>
            <h3>Backend</h3>
            {Object.keys(skills.Backend).map(skill => (
              <Skill
                skillName={skill}
                skillLevel={skills.Backend[skill]}
                key={skill}
              />
            ))}
          </div>
        </WhiteBox>

        <WhiteBox css={styles.whiteBox}>
          <div>
            <h3>Others</h3>
            <ul>
              <li css={styles.otherListItem}>
                <div css={styles.sonotaTitle}>
                  <FontAwesomeIcon
                    icon="caret-square-right"
                    style={styles.caret}
                  />
                  Certifications
                </div>
                <div css={styles.sonotaContent}>AWS-SAA, AWS-CLF</div>
              </li>
              <li css={styles.otherListItem}>
                <div css={styles.sonotaTitle}>
                  <FontAwesomeIcon
                    icon="caret-square-right"
                    style={styles.caret}
                  />
                  Languages
                </div>
                <div css={styles.sonotaContent}>Japanese, English</div>
              </li>
              <li css={styles.otherListItem}>
                <div css={styles.sonotaTitle}>
                  <FontAwesomeIcon
                    icon="caret-square-right"
                    style={styles.caret}
                  />
                  Tools
                </div>
                <div css={styles.sonotaContent}>VSCode, HHKB Pro2</div>
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
