import {
  postProjectsModel,
  getProjectsModel,
  putProjectsModel,
  deleteProjectsModel
} from '../../Model/sql/projects/projects.js';

export const getProjects = async (req, res) => {
  let org_id = req.query.org_id;

  let result = await getProjectsModel(org_id);

  res.status(200).send(result);
};

export const postProjects = async (req, res) => {
  let title = req.body.title;
  let description = req.body.description;
  let org_id = req.body.org_id;

  await postProjectsModel(title, description, org_id);

  res.status(200).send('Post Successful');
};

export const putProjects = async (req, res) => {
  let title = req.body.title;
  let description = req.body.description;
  let project_id = req.body.project_id;

  await putProjectsModel(title, description, project_id);

  res.status(200).send('Put Successful');
};

export const deleteProjects = async (req, res) => {
  let project_id = req.query.project_id;

  await deleteProjectsModel(project_id);

  res.status(200).send('Delete Successful');
};