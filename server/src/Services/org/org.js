import {
  CreateOrgModel,
  GetOrgModel,
  PutOrgModel,
  DeleteOrgModel
} from '../../Model/sql/org/org.js';

export const CreateOrg = async (req, res) => {
  let primary_email = req.body.email;
  let org_name = req.body.org_name;
  console.log(primary_email);

  await CreateOrgModel(primary_email, org_name);

  res.status(200).send('Org Created');
};

export const GetOrgs = async (req, res) => {
  let email = req.query.email;
  console.log(email);
  let result = await GetOrgModel(email);

  res.status(200).send(result);
};

export const DeleteOrg = async (req, res) => {
  let org_id = req.query.org_id;

  await DeleteOrgModel(org_id);

  res.status(200).send('Delete Successful');
};

export const PutOrg = async (req, res) => {
  let org_id = req.body.org_id;
  let org_name = req.body.org_name;

  await PutOrgModel(org_id, org_name);

  res.status(200).send('Put Successful');
};
