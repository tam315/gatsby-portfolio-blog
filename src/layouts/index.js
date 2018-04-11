import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import RipIe from '../components/RipIe';

const TemplateWrapper = ({ children, location }) => {
  const siteMetadata = {
    title: 'Yuuniworks / 島根のフリーランスエンジニア',
    description: '島根県浜田市を拠点に、主にフロントエンド開発のお手伝いをしているフリーランスエンジニアです。',
    keywords: 'SPA, Faas, Serverless, React, Angular, フリーランス',
  };

  return (
    <div>
      <RipIe />
      <Helmet
        title={siteMetadata.title}
        meta={[
          { name: 'description', content: siteMetadata.description },
          { name: 'keywords', content: siteMetadata.keywords },
        ]}
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