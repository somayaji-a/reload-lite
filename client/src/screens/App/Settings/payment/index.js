import React, { useState, useContext, useEffect } from 'react';
import { Spin } from 'antd';
import styled from 'styled-components';

import ApiContext from '../../../../utils/apiContext';
import OrgContext from '../../../../utils/orgContext';
import axios from '../../../../services/axios';

import getOrgId from '../../../../utils/orgId';
import SEO from '../../../../components/Marketing/Layout/seo';
import SettingsHeader from '../../../../components/App/Navigation/settingsHeader';
import UpdatePaymentCard from './updatePaymentCard';
import AttachPaymentFormWrapper from './attachPaymentFormWrapper';

const Wrapper = styled.div``;

const Title = styled.h1`
  font-size: 1.5rem;
`;

const PaymentSettings = () => {
  const org_id = getOrgId();
  const { fetchFailure, fetchInit, fetchSuccess, apiState } = useContext(ApiContext);
  const { orgState } = useContext(OrgContext);
  const { isLoading } = apiState;

  const [isModalCard, setModalCard] = useState(false);

  //stripe payment state
  const [deletePaymentId, setDeletePaymentId] = useState();
  const [payCards, setPayCards] = useState([]);
  const [paymentRemoved, setPaymentRemoved] = useState(false);

  /* 
      Stripe Methods
  */

  const deletePaymentMethod = async () => {};

  /* 
      Helper Methods
  */

  const handleModalCardCancel = () => {
    setModalCard(false);
  };

  const seoData = {
    title: 'Saas Starter Kit Pro Settings page',
    description: 'Saas Starter Kit Pro Settings page'
  };

  return (
    <React.Fragment>
      <SEO seoData={seoData} />
      <Wrapper>
        <SettingsHeader org_id={org_id} />

        <Title>Payment Settings</Title>
        <Spin tip="Loading..." spinning={isLoading}>
          <UpdatePaymentCard
            payCards={payCards}
            paymentRemoved={paymentRemoved}
            isModalCard={isModalCard}
            handleModalCardCancel={handleModalCardCancel}
            deletePaymentMethod={deletePaymentMethod}
            setDeletePaymentId={setDeletePaymentId}
            setModalCard={setModalCard}
          />
        </Spin>
        <AttachPaymentFormWrapper />
      </Wrapper>
    </React.Fragment>
  );
};

export default PaymentSettings;
