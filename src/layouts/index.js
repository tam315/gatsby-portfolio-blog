import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import RipIe from '../components/RipIe';

const TemplateWrapper = ({ children, location, data }) => {
  return (
    <div>
      <RipIe />
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: data.site.siteMetadata.description },
          { name: 'keywords', content: data.site.siteMetadata.keywords },
        ]}
        script={[
          {
            src: 'https://use.fontawesome.com/releases/v5.0.8/js/all.js',
            integrity:'sha384-SlE991lGASHoBfWbelyBPLsUlwY1GwNDJo3jSJO04KZ33K2bwfV9YBauFfnzvynJ',
            crossorigin: 'anonymous',
          },
        ]}
      />
      <Header />

      {children()}
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
  query LayoutIndexPageQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`