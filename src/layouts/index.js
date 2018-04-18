import fontawesome from '@fortawesome/fontawesome';
import faStarEmpty from '@fortawesome/fontawesome-free-regular/faStar';
import faArrowLeft from '@fortawesome/fontawesome-free-solid/faArrowLeft';
import faCaretSquareRight from '@fortawesome/fontawesome-free-solid/faCaretSquareRight';
import faExternalLinkAlt from '@fortawesome/fontawesome-free-solid/faExternalLinkAlt';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';
import faTimesCircle from '@fortawesome/fontawesome-free-solid/faTimesCircle';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
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

  return (
    <div>

      {/* for Facebook Comment Plugin */}
      <div id="fb-root"></div>

      <RipIe />
      <Helmet><html lang="ja" /></Helmet>
      <Header location={location}/>

      {children()}
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper