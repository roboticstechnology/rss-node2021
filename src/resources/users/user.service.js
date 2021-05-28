const usersRepo = require('./user.memory.repository');

const getAll = async () => usersRepo.getAll();

const creat = async user => usersRepo.creat(user);

const getUserByID = async id => usersRepo.getUserByID(id);

const updateUser = async (id, updData) => usersRepo.updateUser(id, updData);

const deleteUser = async id => usersRepo.deleteUser(id);

module.exports = {
  getAll,
  creat,
  getUserByID,
  updateUser,
  deleteUser
};
