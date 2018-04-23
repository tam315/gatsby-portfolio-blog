import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

import config from '../../../data/SiteConfig';

class SEO extends React.Component {
  render() {
    const { postNode, metaData } = this.props;

    // initial metadata
    let _metaData = {
      title: config.siteTitle,
      description: config.siteDescription,
      keywords: config.siteKeywords,
      image: config.siteUrl + config.siteLogo,
    };

    // override _metadata if node is blogpost
    if (postNode) {
      const postMeta = postNode.frontmatter;

      _metaData.title = postMeta.title + ' / Yuuniworks Blog';
      _metaData.description = postNode.excerpt;
      _metaData.keywords = config.siteKeywords;
      _metaData.image = config.siteUrl + postMeta.thumbnail;
    }

    // override _metadata if metadata is set manually
    _metaData = {
      ..._metaData,
      ...metaData,
    }

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
}

SEO.propTypes = {
  postNode: PropTypes.object,
  metaData: PropTypes.object,
}

export default SEO;
