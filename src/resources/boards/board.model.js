const { v4: uuidv4 } = require('uuid');
const Column = require('../Columns/colum.model');

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
    const { title, columns } = board;
    return { title, columns };
  }
}

module.exports = Board;
