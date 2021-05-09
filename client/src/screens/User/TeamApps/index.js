import React from 'react';

import ProsaasCard from '../../../components/Common/ProCard';

import SEO from '../../../components/Marketing/Layout/seo';

const TeamApps = () => {
  const seoData = {
    title: 'Saas Starter Kit Pro Team Apps page',
    description: 'Saas Starter Kit Pro Team Apps page'
  };

  return (
    <React.Fragment>
      <SEO seoData={seoData} />
      <div>
        <ProsaasCard title="Multi User Team Apps only Available in Pro Version" />
      </div>
    </React.Fragment>
  );
};

export default TeamApps;
