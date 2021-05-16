const User = require('./user.model');

const userLists = [];

const getAll = async () => userLists;

const creat = async user => {
  const usr = new User(user);
  userLists.push(usr);
  return usr;
};

const getUserByID = async id => userLists.find(user => user.id === id);

const updateUser = (id, updData) => {
  const editedUserIndex = userLists.findIndex(user => user.id === id);
  userLists[editedUserIndex] = { ...userLists[editedUserIndex], ...updData };
  return userLists[editedUserIndex];
};

const deleteUser = id => {
  const deletedUserIndex = userLists.findIndex(user => user.id === id);
  const deletedUser = userLists.splice(deletedUserIndex, 1);
  return deletedUser;
};

module.exports = {
  getAll,
  creat,
  getUserByID,
  updateUser,
  deleteUser
};
