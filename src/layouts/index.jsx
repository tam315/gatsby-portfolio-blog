import fontawesome from '@fortawesome/fontawesome';
import faStarEmpty from '@fortawesome/fontawesome-free-regular/faStar';
import faArrowLeft from '@fortawesome/fontawesome-free-solid/faArrowLeft';
import faCaretSquareRight from '@fortawesome/fontawesome-free-solid/faCaretSquareRight';
import faExternalLinkAlt from '@fortawesome/fontawesome-free-solid/faExternalLinkAlt';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';
import faTimesCircle from '@fortawesome/fontawesome-free-solid/faTimesCircle';
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import RipIe from '../components/RipIe';

const TemplateWrapper = ({ children, location }) => {
  fontawesome.library.add(
    faArrowLeft,
    faCaretSquareRight,
    faExternalLinkAlt,
    faStar,
    faStarEmpty,
    faTimesCircle,
  );

  const style = {
    // global background color
    background: '#F5F7FA',
  };

  return (
    <div css={style}>

      {/* for Facebook Comment Plugin */}
      <div id="fb-root" />

      <RipIe />
      <Helmet><html lang="ja" /></Helmet>
      <Header location={location} />

      {children()}
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired,
};

export default TemplateWrapper;
