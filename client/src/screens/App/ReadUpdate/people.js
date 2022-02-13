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

const People = ({
  people,
  isEditting,
  editPeopleID,
  handleEditNameChange,
  editName,
  handleEditDescChange,
  editDescription,
  editPeople,
  deletePeople,
  putPeople,
  setEdit
}) => (
  <Wrapper>
    <h4>{people.name}</h4>
    <div>{people.description}</div>
    <ButtonsWrapper>
      <Button
        onClick={() => editPeople(people)}
        backgroundColor={colors.indigo600}
        textColor={colors.white}
        hoverBackgroundColor={colors.indigo500}
        activeBackgroundColor={colors.indigo600}
      >
        Edit
      </Button>

      <DangerButton
        onClick={() => deletePeople(people)}
        backgroundColor={colors.red500}
        textColor={colors.white}
        hoverBackgroundColor={colors.indigo500}
        activeBackgroundColor={colors.indigo600}
      >
        Delete
      </DangerButton>
    </ButtonsWrapper>
    {isEditting && people.id === editPeopleID && (
      <form onSubmit={(event) => putPeople(event, people)}>
        <Card>
          <NameWrapper>
            <FieldLabel>
              Name
              <TextInput onChange={handleEditNameChange} value={editName} name="name" />
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

export default People;
