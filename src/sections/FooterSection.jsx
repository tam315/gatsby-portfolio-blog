import PropTypes from 'prop-types';
import React from 'react';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import svgFacebook from '../icons/footer-facebook.svg';
import svgForm from '../icons/footer-form.svg';
import svgGithub from '../icons/footer-github.svg';
import svgMail from '../icons/footer-mail.svg';
import svgPhone from '../icons/footer-phone.svg';
import svgPin from '../icons/footer-pin.svg';
import { rhythm } from '../utils/typography';

const FooterSection = props => {
  const footerInfo = [
    {
      imgPath: svgForm,
      description: 'フォームでのお問い合わせ',
      onClick: () => props.setCurrentModal('CONTACT'),
    },
    {
      imgPath: svgMail,
      description: 'info@yuuniworks.com',
      link: 'mailto:info@yuuniworks.com',
    },
    {
      imgPath: svgFacebook,
      description: 'facebook.com/yuuniworks',
      link: 'https://www.facebook.com/yuuniworks/',
    },
    {
      imgPath: svgGithub,
      description: 'github.com/junkboy0315',
      link: 'https://github.com/junkboy0315/',
    },
    {
      imgPath: svgPhone,
      description: '070 4398 9424',
      link: 'tel:07043989424',
    },
    {
      imgPath: svgPin,
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

FooterSection.propTypes = {
  setCurrentModal: PropTypes.func.isRequired,
};

export default FooterSection;
