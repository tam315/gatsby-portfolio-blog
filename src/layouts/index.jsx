import fontawesome from '@fortawesome/fontawesome';
import faStarEmpty from '@fortawesome/fontawesome-free-regular/faStar';
import faArrowLeft from '@fortawesome/fontawesome-free-solid/faArrowLeft';
import faCaretSquareRight from '@fortawesome/fontawesome-free-solid/faCaretSquareRight';
import faExternalLinkAlt from '@fortawesome/fontawesome-free-solid/faExternalLinkAlt';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';
import faTimesCircle from '@fortawesome/fontawesome-free-solid/faTimesCircle';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import 'string.prototype.startswith';
import Header from '../components/Header';
import RipIe from '../components/RipIe';

const propTypes = {
  children: PropTypes.func.isRequired,
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired })
    .isRequired,
};

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
      <RipIe />
      <Helmet>
        <html lang="ja" />

        {/* polifyll to use react-onclickoutside on IE11 */}
        <script src="//cdnjs.cloudflare.com/ajax/libs/dom4/2.0.0/dom4.js" />
      </Helmet>
      <Header location={location} />

      {children()}
    </div>
  );
};

TemplateWrapper.propTypes = propTypes;

export default TemplateWrapper;
