import React from 'react';
import Helmet from 'react-helmet';

class GoogleAds extends React.Component {
  componentWillMount = () => {
    // quit if SSR
    if (typeof window === 'undefined') return;

    window.adsbygoogle = window.adsbygoogle || [];

    // if already initialized
    if (!window.adsbygoogle.length) return;

    window.adsbygoogle.push({
      google_ad_client: 'ca-pub-7134126650568891',
      enable_page_level_ads: true,
    });
  };

  render = () => (
    <div>
      <Helmet>
        <script
          async
          src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />
        <script />
      </Helmet>
    </div>
  );
}

export default GoogleAds;
