const Task = require('./task.model');

const taskLists = [];

const getAll = async () => taskLists ;

const getTaskByID = async id => taskLists.find(task => task.id === id);

const creat = async task => {
  const tsk = new Task(task);
  taskLists.push(tsk);
  return tsk;
};

const updateTask = (id, updData) => {
  const editedTaskIndex = taskLists.findIndex(task => task.id === id);
  taskLists[editedTaskIndex] = { ...taskLists[editedTaskIndex], ...updData };
  return taskLists[editedTaskIndex];
};

const deleteTask = id => {
  const deletedTaskIndex = taskLists.findIndex(task => task.id === id);
  const deletedTask = taskLists.splice(deletedTaskIndex, 1);
  return deletedTask;
};

module.exports = {
  getAll,
  creat,
  getTaskByID,
  updateTask,
  deleteTask
};
