import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { FaRegCreditCard } from 'react-icons/fa';
import { Spin } from 'antd';

import OrgContext from '../../../utils/orgContext';
import ApiContext from '../../../utils/apiContext';
import AuthContext from '../../../utils/authContext';
import axios from '../../../services/axios';
import { colors, breakpoints } from '../../../styles/theme';

import Button from '../../../components/Common/buttons/PrimaryButton';
import Card from '../../../components/Common/Card';

const Wrapper = styled.div`
  display: flex;
  background-color: ${colors.gray50};
  min-height: 100vh;
  margin-top: 2rem;

  @media (max-width: ${breakpoints.small}) {
    flex-direction: column;
    align-items: center;
  }
`;

const PaymentConfirm = styled.div`
  background-color: white;
  margin-right: 2rem;
  margin-left: 1rem;
  height: max-content;
  padding: 1rem;
  padding-bottom: 2rem;

  @media (max-width: ${breakpoints.small}) {
    flex-direction: column;
    margin: 1rem;
    width: 90%;
  }
`;

const PaymentInfo = styled.div`
  background-color: white;
  margin-left: 2rem;
  margin-right: 1rem;
  width: 70%;
  height: max-content;
  padding: 1rem;
  @media (max-width: ${breakpoints.small}) {
    margin: 1rem;
    width: 90%;
  }
`;

const ButtonWrapper = styled.div`
  padding-top: 2rem;
  padding-bottom: 1rem;
  background-color: ${colors.white};
  text-align: left;
`;

const StyledCardDisplayWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  margin-bottom: 1rem;
`;

const StyledCardDisplay = styled.div`
  font-size: 1.075rem;
  border-radius: 1rem;
  padding: 0.5rem;
  background-color: darkblue;
  color: white;
  font-weight: 500;
  width: 14rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  margin: 1rem;
  cursor: pointer;
  border: ${(props) => (props.isActive ? '4px solid lightblue' : null)};
`;

const CardNumber = styled.div`
  font-size: 1.3rem;
  padding-left: 0.5rem;
`;

const Expires = styled.div`
  padding-left: 0.5rem;
`;

const SecondCardRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardBrandImage = styled.img`
  padding-right: 0.5rem;
`;

const PaymentConfirmRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 0 0.3rem 0;
`;

const StyledHr = styled.hr`
  background-color: black;
  height: 2px;
`;

const CheckoutForm = () => {
  const location = useRouter();

  const isLoading = false;
  const { authState } = useContext(AuthContext);
  let token = authState?.user.jwt_token;
  const headers = { Authorization: `Bearer ${token}` };

  const addPaymentMethod = async (event) => {
    event.preventDefualt();
  };

  const setIcons = (brand) => {
    switch (brand) {
      case 'visa':
        return <CardBrandImage src="/credit card icons/visa.png" alt="Visa logo" />;
      case 'amex':
        return (
          <CardBrandImage
            src="/credit card icons/american_express.png"
            alt="American Express logo"
          />
        );
      case 'discover':
        return <CardBrandImage src="/credit card icons/discover.png" alt="Discover logo" />;
      case 'mastercard':
        return <CardBrandImage src="/credit card icons/mastercard.png" alt="Mastercard logo" />;
      default:
        return <FaRegCreditCard />;
    }
  };

  const createSubscription = async () => {
    location.push('/purchase/confirm');
  };

  return (
    <Wrapper>
      <PaymentInfo>
        <Spin tip="Loading" spinning={isLoading}>
          <h2>Purchasing Subscription </h2>
          <h3>Please Choose Payment Method</h3>

          <div>
            <p>No Payment Methods Found</p>
          </div>
        </Spin>

        <Spin tip="Loading" spinning={isLoading}>
          <Card>
            <form onSubmit={addPaymentMethod}>
              <ButtonWrapper>
                <Button disabled>Add Card</Button>
              </ButtonWrapper>
            </form>
          </Card>
        </Spin>
      </PaymentInfo>

      <Spin tip="Loading" spinning={isLoading}>
        <PaymentConfirm>
          <h3>Purchasing Plan</h3>

          <PaymentConfirmRow>
            <div>Basic Plan</div>
            <div>
              <strong>$12/month</strong>
            </div>
          </PaymentConfirmRow>
          <StyledHr />
          <PaymentConfirmRow>
            <div>
              <strong>Subtotal</strong>
            </div>
            <div>$12</div>
          </PaymentConfirmRow>
          <Button onClick={createSubscription}>Confirm</Button>
        </PaymentConfirm>
      </Spin>
    </Wrapper>
  );
};

export default CheckoutForm;
