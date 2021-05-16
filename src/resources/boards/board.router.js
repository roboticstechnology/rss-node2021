const router = require('express').Router();
const boardsService = require('./board.service');
const Board = require('./board.model');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.status(200).json(boards.map(Board.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const board = await boardsService.getBoardById(req.params.id);
  if (board) res.json(Board.toResponse(board));
  else res.status(404).send('Board not found');
});

router.route('/').post(async (req, res) => {
  const board = await boardsService.createBoard(req.body);
  res.status(201).json(Board.toResponse(board));
});

router.route('/:id').put(async (req, res) => {
  const board = await boardsService.updateBoard(req.params.id, req.body);
  res.json(board);
});

router.route('/:id').delete(async (req, res) => {
  const board = await boardsService.deleteBoard(req.params.id);
  res.status(204).json(board);
});

module.exports = router;
