const { v4: uuidv4 } = require('uuid');
const Column = require('../columns/colum.model');

class Board {
  constructor ({
    id = uuidv4(),
    title = 'node',
    columns = [
      new Column({ title: 'Task1', order: 0 }),
      new Column({ title: 'Task2', order: 1 })
    ]
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map(column => new Column(column));
  }

  static toResponse (board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

module.exports = Board;
