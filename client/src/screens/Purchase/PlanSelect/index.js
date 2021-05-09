import React from 'react';

import { useRouter } from 'next/router';
import styled from 'styled-components';
import { colors, breakpoints } from '../../../styles/theme';

const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: ${breakpoints.small}) {
    flex-direction: column;
    align-items: center;
  }
`;

const FeaturesWrapper = styled.div`
  margin-top: 1rem;
  padding: 0.2rem;
`;

const Feature = styled.div`
  padding-bottom: 0.2rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

const PlanButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1.3rem;
  font-weight: 500;
  width: 11rem;
  background-color: blue;
  color: white;
  cursor: pointer;
`;

const PlanCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16rem;
  padding: 2rem;
  background-color: white;
  border: ${(props) => (props.isActive ? 'solid 1px black' : '')};
  cursor: pointer;
  margin-bottom: 1rem;
  border-radius: 0.3rem;
  &:hover {
    border: solid 1px black;
    opacity: 85%;
  }
`;

const PlanHeader = styled.div`
  font-size: 1.2rem;
  font-weight: 900;
`;

const PlanPrice = styled.div`
  font-size: 0.9rem;
  font-weight: 900;
`;

const PurchaseHeader = styled.h1`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${colors.coolGray700};
  text-align: center;
`;

const PurchaseText = styled.div`
  font-size: 1.075rem;
  font-weight: 500;
  color: ${colors.coolGray700};
  text-align: center;
  padding-bottom: 1rem;
`;

const PlanSelect = () => {
  const location = useRouter();

  const submitPlan = () => {
    location.push({
      pathname: '/purchase/payment'
    });
  };

  return (
    <div>
      <PurchaseHeader>Purchasing SAAS Pro </PurchaseHeader>
      <CardsWrapper>
        <PlanCard>
          <PlanHeader>Basic Plan</PlanHeader>
          <PlanPrice>$12/month</PlanPrice>
          <FeaturesWrapper>
            <Feature>Feature 1</Feature>
            <hr />
            <Feature>Feature 2</Feature>
            <hr />
            <Feature>Feature 3</Feature>
            <hr />
          </FeaturesWrapper>
        </PlanCard>
        <PlanCard>
          <PlanHeader>Premium Plan</PlanHeader>
          <PlanPrice>$20/month</PlanPrice>
          <FeaturesWrapper>
            <Feature>Feature 1</Feature>
            <hr />
            <Feature>Feature 2</Feature>
            <hr />
            <Feature>Feature 3</Feature>
            <hr />
          </FeaturesWrapper>
        </PlanCard>
      </CardsWrapper>
      <ButtonWrapper>
        <PlanButton onClick={submitPlan}>Submit</PlanButton>
      </ButtonWrapper>
    </div>
  );
};

export default PlanSelect;
