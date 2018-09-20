import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
import {
  faArrowLeft,
  faCaretSquareRight,
  faExternalLinkAlt,
  faStar,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import 'string.prototype.startswith';
import Header from './Header';
import RipIe from './RipIe';

library.add(
  faArrowLeft,
  faCaretSquareRight,
  faExternalLinkAlt,
  faStar,
  faStarEmpty,
  faTimesCircle,
);

const TemplateWrapper = ({ children, location }) => {
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

      {children}
    </div>
  );
};

export default TemplateWrapper;
