const Board = require('./board.model');

const boardLists = [];

const getAll = async () => boardLists;

const getBoardById = async id => boardLists.find(board => board.id === id);

const createBoard = async boardData => {
  const newBoard = new Board(boardData);
  boardLists.push(newBoard);
  return newBoard;
};

const updateBoard = async (id, newData) => {
  const updatedBoardIndex = boardLists.findIndex(board => board.id === id);
  boardLists[updatedBoardIndex] = { ...boardLists[updatedBoardIndex], ...newData };
  return boardLists[updatedBoardIndex];
};

const deleteBoard = async id => {
  const deletedBoardIndex = boardLists.findIndex(board => board.id === id);
  const deletedBoard = boardLists.splice(deletedBoardIndex, 1);
  return deletedBoard;
};

module.exports = {
  getAll,
  getBoardById,
  createBoard,
  updateBoard,
  deleteBoard
};