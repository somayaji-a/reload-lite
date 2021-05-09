import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';

import AuthContext from '../../../../utils/authContext';
import OrgContext from '../../../../utils/orgContext';
import ApiContext from '../../../../utils/apiContext';
import { colors } from '../../../../styles/theme';
import axios from '../../../../services/axios';

import Card from '../../../../components/Common/Card';
import Button from '../../../../components/Common/buttons/PrimaryButton';

const ButtonWrapper = styled.div`
  padding-top: 2rem;
  padding-bottom: 1rem;
  background-color: ${colors.white};
  text-align: left;
`;

const Header = styled.h2`
  margin-bottom: 4rem;
`;

const SuccessResponse = styled.div`
  font-size: 0.9rem;
  color: green;
  font-weight: 100;
  margin-bottom: 1rem;
  margin-top: -3rem;
`;

const AttachPaymentForm = () => {
  const isLoading = false;

  const [successMessage, setSuccessMessage] = useState('');
  const [setupIntentState, setSetupIntent] = useState();

  /* eslint-disable  */

  /* eslint-enable */

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <Card>
      <Spin tip="Loading..." spinning={isLoading}>
        <Header>Add a Payment Method</Header>
        <SuccessResponse>{successMessage}</SuccessResponse>
        {!successMessage && (
          <div>
            <form onSubmit={handleSubmit}>
              <ButtonWrapper>
                <Button type="submit">Add</Button>
              </ButtonWrapper>
            </form>
            <p>Adding a card will make it the default payment method</p>
          </div>
        )}
      </Spin>
    </Card>
  );
};

export default AttachPaymentForm;
