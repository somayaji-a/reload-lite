import db from '../../../Database/sql/db.js';

export const CreateOrgModel = async (primary_email, org_name) => {
  let text = `INSERT INTO organizations(primary_email, org_name)
              VALUES($1, $2)
              RETURNING id`;

  let values = [primary_email, org_name];

  let queryResult = await db.query(text, values);

  return queryResult.rows[0].id;
};

export const GetOrgModel = async (email) => {
  let text = `
      SELECT *
      FROM organizations 
      WHERE primary_email=$1
  `;

  let values = [email];

  let queryResult = await db.query(text, values);
  return queryResult.rows;
};

export const DeleteOrgModel = async (org_id) => {
  let todosText = `DELETE FROM todos WHERE org_id=$1`;
  let todosValues = [org_id];

  let orgText = `DELETE FROM organizations WHERE id=$1`;
  let orgValues = [org_id];

  await db.query(todosText, todosValues);

  await db.query(orgText, orgValues);
  return;
};

export const PutOrgModel = async (org_id, org_name) => {
  let text = `UPDATE organizations SET org_name=$2 
              WHERE id=$1`;

  let values = [org_id, org_name];

  await db.query(text, values);
};

export const GetOrgsbyEmail = async (primary_email) => {
  let text = `SELECT * from organizations where primary_email=$1`;

  let values = [primary_email];

  let queryResult = await db.query(text, values);

  return queryResult.rows;
};
