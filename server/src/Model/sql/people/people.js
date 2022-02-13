import db from '../../../Database/sql/db.js';

export const postPeopleModel = async (name, description, author, org_id) => {
  let text = `INSERT INTO people(name, description, author, org_id)
              VALUES ($1, $2, $3, $4)`;
  let values = [name, description, author, org_id];

  await db.query(text, values);

  return;
};

export const getPeopleModel = async (org_id) => {
  let text = `SELECT * FROM people WHERE org_id=$1 ORDER BY id`;
  let values = [org_id];

  let queryResult = await db.query(text, values);

  return queryResult.rows;
};

export const putPeopleModel = async (name, description, author, people_id) => {
  let text = `UPDATE people SET name= $1, description=$2, author=$3
              WHERE id = $4`;
  let values = [name, description, author, people_id];

  await db.query(text, values);

  return;
};

export const deletePeopleModel = async (people_id) => {
  let text = `DELETE FROM people 
              WHERE id = $1`;
  let values = [people_id];

  await db.query(text, values);

  return;
};
