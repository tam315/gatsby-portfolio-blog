import Helmet from 'react-helmet';
import React from 'react';

class GoogleAds extends React.Component {
  componentDidMount = () => {
    // quit if SSR
    if (typeof window === 'undefined') return;

    window.adsbygoogle = window.adsbygoogle || [];

    try {
      window.adsbygoogle.push({
        google_ad_client: 'ca-pub-7134126650568891',
        enable_page_level_ads: true,
      });
    } catch (err) {
      console.log('TODO: fix error', err);
    }
  };

  render = () => (
    <Helmet>
      <script
        async
        src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
      <script />
    </Helmet>
  );
}

export default GoogleAds;
