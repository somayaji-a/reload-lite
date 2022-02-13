import {
  getPeopleModel,
  postPeopleModel,
  putPeopleModel,
  deletePeopleModel
} from '../../Model/sql/people/people.js';

export const getPeople = async (req, res) => {
  let org_id = req.query.org_id;

  let result = await getPeopleModel(org_id);

  res.status(200).send(result);
};

export const postPeople = async (req, res) => {
  let name = req.body.name;
  let description = req.body.description;
  let author = req.body.author;
  let org_id = req.body.org_id;

  await postPeopleModel(name, description, author, org_id);

  res.status(200).send('Post Successful');
};

export const putPeople = async (req, res) => {
  let name = req.body.name;
  let description = req.body.description;
  let author = req.body.author;
  let people_id = req.body.people_id;

  await putPeopleModel(name, description, author, people_id);

  res.status(200).send('Put Successful');
};

export const deletePeople = async (req, res) => {
  let people_id = req.query.people_id;
  console.log("people_id: " + people_id);
  await deletePeopleModel(people_id);

  res.status(200).send('Delete Successful');
};
