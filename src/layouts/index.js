import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import RipIe from '../components/RipIe';
import config from '../../data/SiteConfig'

const TemplateWrapper = ({ children, location }) => {
  return (
    <div>

      {/* for Facebook Comment Plugin */}
      <div id="fb-root"></div>

      <RipIe />
      <Helmet
        script={[
          {
            src: 'https://use.fontawesome.com/releases/v5.0.8/js/all.js',
            integrity:'sha384-SlE991lGASHoBfWbelyBPLsUlwY1GwNDJo3jSJO04KZ33K2bwfV9YBauFfnzvynJ',
            crossOrigin: 'anonymous',
          },
        ]}
      >
        <html lang="ja" />
      </Helmet>
      <Header location={location}/>

      {children()}
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper