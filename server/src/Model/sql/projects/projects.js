import db from '../../../Database/sql/db.js';

export const postProjectsModel = async (title, description, org_id) => {
  let text = `INSERT INTO projects(title, description, org_id)
              VALUES ($1, $2, $3)`;
  let values = [title, description, org_id];

  await db.query(text, values);

  return;
};

export const getProjectsModel = async (org_id) => {
  let text = `SELECT * FROM projects WHERE org_id=$1 ORDER BY id`;
  let values = [org_id];

  let queryResult = await db.query(text, values);

  return queryResult.rows;
};

export const putProjectsModel = async (title, description, project_id) => {
  let text = `UPDATE projects SET title= $1, description=$2
              WHERE id = $3`;
  let values = [title, description, project_id];

  await db.query(text, values);

  return;
};

export const deleteProjectsModel = async (project_id) => {
  let text = `DELETE FROM projects 
              WHERE id=$1`;
  let values = [project_id];

  await db.query(text, values);

  return;
};
