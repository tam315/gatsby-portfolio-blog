import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

import config from '../../../data/SiteConfig';

const propTypes = {
  postNode: PropTypes.shape({
    frontmatter: PropTypes.object,
    excerpt: PropTypes.string,
  }),
  metaData: PropTypes.objectOf(PropTypes.string),
};

const defaultProps = {
  postNode: null,
  metaData: null,
};

function SEO({ postNode, metaData }) {
  // initial metadata
  let _metaData = {
    title: config.siteTitle,
    description: config.siteDescription,
    keywords: config.siteKeywords,
    image: config.siteUrl + config.siteLogo,
  };

  // override _metadata if node is blogpost
  if (postNode) {
    _metaData.title = `${postNode.frontmatter.title} / Yuuniworks Blog`;
    _metaData.description = postNode.excerpt;
    _metaData.keywords = config.siteKeywords;
    _metaData.image = config.siteUrl + postNode.frontmatter.thumbnail;
  }

  // override _metadata if metadata is set manually
  _metaData = {
    ..._metaData,
    ...metaData,
  };

  return (
    <Helmet
      title={_metaData.title}
      meta={[
        { name: 'description', content: _metaData.description },
        { name: 'keywords', content: _metaData.keywords },
        { name: 'image', content: _metaData.image, property: 'og:image' },
      ]}
    />
  );
}

SEO.propTypes = propTypes;
SEO.defaultProps = defaultProps;

export default SEO;
