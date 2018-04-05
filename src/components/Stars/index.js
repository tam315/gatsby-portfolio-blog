import React from 'react'

const Stars = ({ countOfStars }) => {
  const styles = {
    star: { color: '#6292F1' },
    starTranslucent: { opacity: '0.3' },
  }

  countOfStars = Number(countOfStars);

  if ((countOfStars < 1 ) || (countOfStars > 5)) {
    return null;
  }

  let stars = []; // 1 means nomal star, null means translucent star

  for(let i=0; i < countOfStars; i++) {
    stars.push(1);
  }
  for(let i=5; i > countOfStars; i--) {
    stars.push(null);
  }

  return (
    <span css={styles.star}>

    {stars.map((star, index)=>{
      let style;

      return (
        <i
          style={star ? null : styles.starTranslucent }
          className={star ? 'fas fa-star' : 'far fa-star'}
          key={index}
        />
      )
    })}
    </span>
  )
}

export default Stars
