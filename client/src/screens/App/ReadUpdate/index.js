import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import AuthContext from '../../../utils/authContext';
import ApiContext from '../../../utils/apiContext';
import getOrgId from '../../../utils/orgId';
import People from './people';
import Projects from './projects';
import { Empty, Spin } from 'antd';
import axios from '../../../services/axios';
import Card from '../../../components/Common/Card';

const OverallMain = styled.div`
display: flex;
flex-direction: row;
width: 100%;
`;

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const Title = styled.h1`
  font-size: 1.25rem;
`;

const ReadUpdate = () => {
  const org_id = getOrgId();
  const { authState } = useContext(AuthContext);
  const { fetchFailure, fetchInit, fetchSuccess, apiState } = useContext(ApiContext);
  const { isLoading } = apiState;
  let token = authState?.user.jwt_token;
  const headers = { Authorization: `Bearer ${token}` };

  const [people, setPeople] = useState([]);
  const [projects, setProject] = useState([]);

  //Edit People state and form state
  const [isEdittingPeople, setEditPeople] = useState(false);
  const [editPeopleID, setPeopleID] = useState(null);
  const [editName, setEditName] = useState('');
  const [editDescriptionPeople, setEditDescriptionPeople] = useState('');

  //Edit Project state and form state
  const [editProjectID, setProjectID] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [isEdittingProject, setEditProject] = useState(false);
  const [editDescriptionProject, setEditDescriptionProject] = useState('');
  const [editStartDate, setEditStartDate] = useState(projects.startDate);
  const [editEndDate, setEditEndDate] = useState(projects.endDate);

  /* eslint-disable */
  useEffect(() => {
    if (org_id) fetchPeople();
    if (org_id) fetchProjects();
  }, [org_id]);
  /* eslint-enable */

  const fetchPeople = async () => {
    fetchInit();

    let params = { org_id };

    let result = await axios.get(`/api/get/people`, { params, headers }).catch((err) => {
      fetchFailure(err);
    });
    
    setPeople(result.data);
    fetchSuccess();
  };

  const deletePeople = async (people) => {
    fetchInit();
    let people_id = people.id;

    let params = { people_id };
    await axios.delete(`/api/delete/people`, { params, headers }).catch((err) => {
      fetchFailure(err);
    });

    setEditPeople(false);

    setTimeout(() => fetchPeople(), 300);
    fetchSuccess();
  };

  const putPeople = async (event, people) => {
    event.preventDefault();
    fetchInit();
    let name = event.target.name.value;
    let description = event.target.description.value;
    let author = authState?.user.username;
    let people_id = people.id;

    let data = { name, description, author, people_id };
    await axios.put(`/api/put/people`, data, { headers }).catch((err) => {
      fetchFailure(err);
    });

    setEditPeople(false);
    //Save data to context to limit api calls
    setTimeout(() => fetchPeople(), 300);
    fetchSuccess();
  };

  const editPeople = (people) => {
    setEditPeople(true);
    setPeopleID(people.id);
    setEditName(people.name);
    setEditDescriptionPeople(people.description);
  };

  const handleEditNameChange = (event) => {
    setEditName(event.target.value);
  };

  const handleEditDescPeopleChange = (event) => {
    setEditDescriptionPeople(event.target.value);
  };

  const handleEditDescProjectChange = (event) => {
    setEditDescriptionProject(event.target.value);
  };

  const fetchProjects = async () => {
    fetchInit();

    let params = { org_id };

    let result = await axios.get(`/api/get/projects`, { params, headers }).catch((err) => {
      fetchFailure(err);
    });

    setProject(result.data);

    fetchSuccess();
  };

  const deleteProject = async (projects) => {
    fetchInit();
    let project_id = projects.id;

    let params = { project_id };
    await axios.delete(`/api/delete/projects`, { params, headers }).catch((err) => {
      fetchFailure(err);
    });

    setEditProject(false);

    setTimeout(() => fetchProjects(), 300);
    fetchSuccess();
  };

  const putProject = async (event, projects) => {
    event.preventDefault();
    fetchInit();
    let title = event.target.title.value;
    let description = event.target.description.value;
    let startDate = event.target.startDate.value;
    let endDate = event.target.endDate.value;
    let project_id = projects.id;
    
    //let data = { title, description, project_id };
    let data = { title, description, project_id, startDate, endDate};
    console.log(data);
    await axios.put(`/api/put/projects`, data, { headers }).catch((err) => {
      fetchFailure(err);
    });

    setEditProject(false);
    //Save data to context to limit api calls
    setTimeout(() => fetchProjects(), 300);
    fetchSuccess();
  };

  const editProject = (projects) => {
    setEditProject(true);
    setProjectID(projects.id);
    setEditTitle(projects.title);
    setEditStartDate(projects.startDate);
    setEditEndDate(projects.endDate);
    setEditDescriptionProject(projects.description);
  };

  const handleEditTitleChange = (event) => {
    setEditTitle(event.target.value);
  };

  const handleEditStartDateChange = (event) => {
    setEditStartDate(event);
  };

  const handleEditEndDateChange = (event) => {
    setEditEndDate(event);
  };

  return (
    <OverallMain>
      <StyledMain>
        <Title>Team Members: </Title>
        <Card>
          <Spin tip="Loading..." spinning={isLoading}>
            {people.length !== 0 ? (
              people.map((people) => (
                <People
                  people={people}
                  isEditting={isEdittingPeople}
                  editPeopleID={editPeopleID}
                  handleEditNameChange={handleEditNameChange}
                  editName={editName}
                  handleEditDescChange={handleEditDescPeopleChange}
                  editDescription={editDescriptionPeople}
                  editPeople={editPeople}
                  deletePeople={deletePeople}
                  putPeople={putPeople}
                  setEdit={setEditPeople}
                />
              ))
            ) : (
              <Empty />
            )}
          </Spin>
        </Card>
      </StyledMain>
      <StyledMain>
        <Title>Projects: </Title>
        <Card>
          <Spin tip="Loading..." spinning={isLoading}>
            {projects.length !== 0 ? (
              projects.map((projects) => (
                <Projects
                  projects={projects}
                  isEditting={isEdittingProject}
                  editProjectID={editProjectID}
                  handleEditTitleChange={handleEditTitleChange}
                  editTitle={editTitle}
                  handleEditStartDateChange={handleEditStartDateChange}
                  editStartDate={editStartDate}
                  handleEditEndDateChange={handleEditEndDateChange}
                  editEndDate={editEndDate}
                  handleEditDescChange={handleEditDescProjectChange}
                  editDescription={editDescriptionProject}
                  editProject={editProject}
                  deleteProject={deleteProject}
                  putProject={putProject}
                  setEdit={setEditProject}
                />
              ))
            ) : (
              <Empty />
            )}
          </Spin>
        </Card>
      </StyledMain>
    </OverallMain>
    
  );
};

export default ReadUpdate;
