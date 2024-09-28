const { User } = require('../models/userModel');

const getAllUSer = async () => {
  return await User.getAllUSer();
};

const getUserById = async (userId) => {
  const result = await User.getUserById(userId);
  if (!result) {
    throw new Error('User not found');
  }
  return result;
};

const updateUser = async (userId, userData) => {
  const result = await User.updateUser(userId, userData);
  if (!result) {
    throw new Error('User not found');
  }
  return result;
};

const deleteUser = async (userId) => {
  const data = { status: 'inactive' };
  const result = await User.updateUser(userId, data);
  if (!result) {
    throw new Error('User not found');
  }
  return result;
};

const userService = {
  getUserById,
  updateUser,
  deleteUser,
  getAllUSer,
};

module.exports = { userService };
