import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import React from 'react';

const Stars = ({ countOfStars }) => {
  const styles = {
    star: { color: '#6292F1' },
    starTranslucent: { opacity: '0.3' },
  };

  countOfStars = Number(countOfStars);

  if ((countOfStars < 1) || (countOfStars > 5)) {
    return null;
  }

  const stars = []; // 1 means nomal star, null means translucent star

  for (let i = 0; i < countOfStars; i += 1) {
    stars.push(1);
  }
  for (let i = 5; i > countOfStars; i -= 1) {
    stars.push(null);
  }

  return (
    <span css={styles.star}>

      {stars.map((star, index) =>
        star
          ? <FontAwesomeIcon icon={['fas', 'star']} key={index} />
          : <FontAwesomeIcon icon={['far', 'star']} style={styles.starTranslucent} key={index} />)}
    </span>
  );
};

export default Stars;
