import { Users } from '../../../Database/mongo/models.js';

export const getUser = async (email) => {
  let user = await Users.findOne({ email });
  return user;
};

export const saveUsertoDB = async (email, username, firebase_user_id) => {
  let user = new Users({ email, username, firebase_user_id });
  let result = await user.save();
  return { id: result._id };
};

export const updateUsernameModel = async (username, _id) => {
  await Users.findByIdAndUpdate({ _id }, { username });
};

export const updateEmailModel = async (email, _id) => {
  await Users.findByIdAndUpdate({ _id }, { email });
};
