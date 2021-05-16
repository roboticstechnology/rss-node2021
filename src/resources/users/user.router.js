const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const reqUser = await usersService.getUserByID(req.params.id);
  if (reqUser) res.json(User.toResponse(reqUser));
  else res.status(404).send('User not found');
});

router.route('/').post(async (req, res) => {
  const newUser = await usersService.creat(req.body);
  res.status(201).json(User.toResponse(newUser));
});

router.route('/:id').put(async (req, res) => {
  const editedUser = await usersService.updateUser(req.params.id, req.body);
  res.json(User.toResponse(editedUser));
});

router.route('/:id').delete(async (req, res) => {
  const deletedUser = await usersService.deleteUser(req.params.id);
  res.status(204).json(User.toResponse(deletedUser));
});

module.exports = router;
