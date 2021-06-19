/**
 * @param  {} {id=10
 * @param  {} title='COLUMN'
 * @param  {} order='0'}={}
 */
class Column {
  constructor ({ id = 10, title = 'COLUMN', order = '0' } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
}

const id = 12

console.log(new Column((id )));
