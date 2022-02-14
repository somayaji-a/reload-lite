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

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Title = styled.h1`
  font-size: 1.25rem;
`;

const InputWrapper = styled.div`
  padding: 1.5rem;
`;

const MultiInputWrapper = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: row;
  width: 100%;
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

  const [formTitle, setTitle] = useState('');
  const [formDescription, setDescription] = useState('');
  const { fetchFailure, fetchInit, fetchSuccess, apiState } = useContext(ApiContext);
  const { isLoading } = apiState;
  const { authState } = useContext(AuthContext);
  let token = authState?.user.jwt_token;
  const headers = { Authorization: `Bearer ${token}` };

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const postProjects = async (event) => {
    event.preventDefault();
    fetchInit();

    let title = event.target.title.value;
    let description = event.target.description.value;
    let start_date = event.target.startDate.value;
    let end_date = event.target.endDate.value;
    let data = { title, description, org_id, start_date, end_date };
    await axios.post(`/api/post/projects`, data, { headers }).catch((err) => {
      fetchFailure(err);
    });

    setTitle('');
    setDescription('');
    setStartDate('');
    setEndDate('');

    message.success('Project Added');
    fetchSuccess();
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div>
      <Title>Add Project Information</Title>
      <form onSubmit={postProjects}>
        <Card>
          <Spin tip="Loading..." spinning={isLoading}>
            <InputWrapper>
              <FieldLabel htmlFor="title">
                Title
                <TextInput onChange={handleTitleChange} value={formTitle} name="title" />
              </FieldLabel>
            </InputWrapper>
            <MultiInputWrapper>
              <FieldLabel htmlFor="startDate">
                Start Date:
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} name="startDate"/>
              </FieldLabel>
              <FieldLabel htmlFor="endDate">
                End Date:
                <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} name="endDate"/>
              </FieldLabel>
            </MultiInputWrapper>
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
