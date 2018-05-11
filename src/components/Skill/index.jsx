import PropTypes from 'prop-types';
import React from 'react';
import Stars from '../Stars';

const propTypes = {
  skillName: PropTypes.string.isRequired,
  skillLevel: PropTypes.number.isRequired,
};

const Skill = ({ skillName, skillLevel }) => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '8px 5px',
      ':hover': {
        background: '#f0f0f0',
      },
    },
    stars: {
      flexShrink: 0,
    },
  };

  if (skillLevel < 1 || skillLevel > 5) {
    return null;
  }

  return (
    <div css={styles.container}>
      <div>{skillName}</div>
      <div css={styles.stars}>
        <Stars countOfStars={skillLevel} />
      </div>
    </div>
  );
};

Skill.propTypes = propTypes;

export default Skill;
