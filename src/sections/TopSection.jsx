import React from 'react';
import { Link as LinkForScroll } from 'react-scroll';
import arrowSvg from '../icons/arrow.svg';
import logoSvg from '../icons/logo.svg';
import topImageJpg from '../images/top-image.jpg';

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
        <img src={logoSvg} alt="logo of my site" />
      </h1>
      <div css={styles.description}>
        Hi! I&#39;m John Doe.
        <br />
        Front-End Developer and <br />
        Algorithms Enthusiast.
      </div>
      <LinkForScroll
        to="gaiyou"
        smooth
        duration={150}
        offset={-50}
        css={styles.arrow}
      >
        <img src={arrowSvg} alt="down arrow" />
      </LinkForScroll>
    </section>
  );
};

export default TopSection;
