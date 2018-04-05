import React from 'react'

import Stars from '../Stars';

const Skill = ({ skillName, skillLevel }) => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '8px 5px',
      ':hover': {
        background: '#f0f0f0',
      }
    },
    stars: {
      flexShrink: 0,
    }
  }

  skillLevel = Number(skillLevel);
  
  if ((skillLevel < 1 ) || (skillLevel > 5)) {
    return null;
  }

  return (
    <div css={styles.container}>
      <div>{ skillName }</div>
      <div css={styles.stars}><Stars countOfStars={skillLevel} /></div>
    </div>
  )
}

export default Skill
