import React from 'react';

import styled from 'styled-components';

import getOrgId from '../../../../utils/orgId';

import SEO from '../../../../components/Marketing/Layout/seo';
import SettingsHeader from '../../../../components/App/Navigation/settingsHeader';

const Wrapper = styled.div``;

const Title = styled.h1`
  font-size: 1.5rem;
`;

const SubscriptionSettings = () => {
  const org_id = getOrgId();

  const seoData = {
    title: 'Saas Starter Kit Pro Subscription page',
    description: 'Saas Starter Kit Pro Subscription page'
  };

  return (
    <React.Fragment>
      <SEO seoData={seoData} />
      <Wrapper>
        <SettingsHeader org_id={org_id} />

        <Title>Subscription Settings</Title>
      </Wrapper>
    </React.Fragment>
  );
};

export default SubscriptionSettings;
