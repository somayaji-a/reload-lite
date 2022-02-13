import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Spin, message } from 'antd';

import AuthContext from '../../../utils/authContext';
import getOrgId from '../../../utils/orgId';
import ApiContext from '../../../utils/apiContext';
import { colors } from '../../../styles/theme';
import axios from '../../../services/axios';

import Button from '../../../components/Common/buttons/SecondaryButton';
import Card from '../../../components/Common/Card';
import FieldLabel from '../../../components/Common/forms/FieldLabel';
import TextArea from '../../../components/Common/forms/TextArea';
import TextInput from '../../../components/Common/forms/TextInput';

const Title = styled.h1`
  font-size: 1.25rem;
`;

const InputWrapper = styled.div`
  padding: 1.5rem;
`;

const TextAreaWrapper = styled.div`
  padding: 0 1.5rem;
`;

const ButtonWrapper = styled.div`
  padding: 1.5rem;
  background-color: ${colors.white};
  text-align: left;
`;

const CreateTask = () => {
  const org_id = getOrgId();

  const [formName, setName] = useState('');
  const [formDescription, setDescription] = useState('');
  const { fetchFailure, fetchInit, fetchSuccess, apiState } = useContext(ApiContext);
  const { isLoading } = apiState;
  const { authState } = useContext(AuthContext);
  let token = authState?.user.jwt_token;
  const headers = { Authorization: `Bearer ${token}` };

  const postPeople = async (event) => {
    event.preventDefault();
    fetchInit();

    let author = authState?.user.username;
    let name = event.target.name.value;
    let description = event.target.description.value;
    let data = { name, description, author, org_id };

    await axios.post(`/api/post/people`, data, { headers }).catch((err) => {
      fetchFailure(err);
    });

    setName('');
    setDescription('');
    message.success('Team Member Added');
    fetchSuccess();
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div>
      <Title>Add Team Members</Title>
      <form onSubmit={postPeople}>
        <Card>
          <Spin tip="Loading..." spinning={isLoading}>
            <InputWrapper>
              <FieldLabel htmlFor="Name">
                Name
                <TextInput onChange={handleNameChange} value={formName} name="name" />
              </FieldLabel>
            </InputWrapper>
            <TextAreaWrapper>
              <FieldLabel htmlFor="description">
                Description
                <TextArea onChange={handleDescChange} value={formDescription} name="description" />
              </FieldLabel>
            </TextAreaWrapper>
            <ButtonWrapper>
              <Button
                textColor={colors.white}
                backgroundColor={colors.indigo600}
                hoverBackgroundColor={colors.indigo500}
                activeBackgroundColor={colors.indigo600}
              >
                Save
              </Button>
            </ButtonWrapper>
          </Spin>
        </Card>
      </form>
    </div>
  );
};

export default CreateTask;
