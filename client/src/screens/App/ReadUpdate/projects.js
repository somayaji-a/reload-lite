import React from 'react';
import styled from 'styled-components';

import { colors } from '../../../styles/theme';

import Button from '../../../components/Common/buttons/SecondaryButton';
import CancelButton from '../../../components/Common/buttons/CancelButton';
import DangerButton from '../../../components/Common/buttons/DangerAltButton';
import Card from '../../../components/Common/Card';
import FieldLabel from '../../../components/Common/forms/FieldLabel';
import TextArea from '../../../components/Common/forms/TextArea';
import TextInput from '../../../components/Common/forms/TextInput';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Wrapper = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
`;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormButtonsWrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
`;


const Projects = ({
  projects,
  isEditting,
  editProjectID,
  handleEditTitleChange,
  editTitle,
  handleEditDescChange,
  editDescription,
  editProject,
  deleteProject,
  putProject,
  setEdit
}) => (
  <Wrapper>
    <h4>{projects.title}</h4>
    <div>{projects.description}</div>
    <div>Start Date: {projects.start_date}</div>
    <div>End Date: {projects.end_date}</div>
    <ButtonsWrapper>
      <Button
        onClick={() => editProject(projects)}
        backgroundColor={colors.indigo600}
        textColor={colors.white}
        hoverBackgroundColor={colors.indigo500}
        activeBackgroundColor={colors.indigo600}
      >
        Edit
      </Button>

      <DangerButton
        onClick={() => deleteProject(projects)}
        backgroundColor={colors.red500}
        textColor={colors.white}
        hoverBackgroundColor={colors.indigo500}
        activeBackgroundColor={colors.indigo600}
      >
        Delete
      </DangerButton>
    </ButtonsWrapper>
    {isEditting && projects.id === editProjectID && (
      <form onSubmit={(event) => putProject(event, projects)}>
        <Card>
          <NameWrapper>
            <FieldLabel>
              Title
              <TextInput onChange={handleEditTitleChange} value={editTitle} name="title" />
            </FieldLabel>
            <FieldLabel htmlFor="startDate">
              Start Date:
              {/* <DatePicker select={startDate} onChange={(date) => setStartDate(date)} name="startDate"/> */}
            </FieldLabel>
            <FieldLabel htmlFor="endDate">
              End Date:
              {/* <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} name="endDate"/> */}
            </FieldLabel>
          </NameWrapper>
          <DescriptionWrapper>
            <FieldLabel>
              Description
              <TextArea
                onChange={handleEditDescChange}
                value={editDescription}
                name="description"
              />
            </FieldLabel>
          </DescriptionWrapper>
          <FormButtonsWrapper>
            <Button
              type="submit"
              backgroundColor={colors.indigo600}
              textColor={colors.white}
              hoverBackgroundColor={colors.indigo500}
              activeBackgroundColor={colors.indigo600}
            >
              Send
            </Button>
            <CancelButton
              onClick={() => setEdit(false)}
              backgroundColor={colors.red500}
              textColor={colors.white}
              hoverBackgroundColor={colors.indigo500}
              activeBackgroundColor={colors.indigo600}
            >
              Cancel
            </CancelButton>
          </FormButtonsWrapper>
        </Card>
      </form>
    )}
    <hr />
  </Wrapper>
);

export default Projects;
