const taskRepo = require('./task.memory.repository');

const getAll = async () => taskRepo.getAll();

const creat = async task => taskRepo.creat(task);

const getTaskByID = async id => taskRepo.getTaskByID(id);

const updateTask = async (id, updData) => taskRepo.updateTask(id, updData);

const deleteTask = async id => taskRepo.deleteUser(id);

module.exports = {
  getAll,
  creat,
  getTaskByID,
  updateTask,
  deleteTask
};
