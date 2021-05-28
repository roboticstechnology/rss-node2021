const boardsRepo = require('./board.memory.repository');

const getAll = async () => boardsRepo.getAll();

const getBoardById = async id => boardsRepo.getBoardById(id);

const createBoard = async boardData => boardsRepo.createBoard(boardData);

const updateBoard = async (id, newData) => boardsRepo.updateBoard(id, newData);

const deleteBoard = async id => {
  boardsRepo.deleteBoard(id);
};

module.exports = {
  getAll,
  getBoardById,
  createBoard,
  updateBoard,
  deleteBoard
};
