const router = require('express').Router();
const Task = require('./task.model');
const taskService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await taskService.getAll();
  res.json(tasks.map(Task.toResponse));
});

router.route('/:boardId').get(async (req, res) => {
  const reqTask = await taskService.getTaskByID(req.params.boardId);
  if (reqTask) res.json(Task.toResponse(reqTask));
  else res.status(404).send('User not found');
});

router.route('/').post(async (req, res) => {
  const newTask = await taskService.creat(req.body);
  res.status(201).json(Task.toResponse(newTask));
});

router.route('/:boardId').put(async (req, res) => {
  const editedUser = await taskService.updateTask(req.params.boardId, req.body);
  res.json(Task.toResponse(editedUser));
});

router.route('/:boardId').delete(async (req, res) => {
  const deletedUser = await taskService.deleteUser(req.params.boardId);
  res.status(204).json(Task.toResponse(deletedUser));
});

module.exports = router;
