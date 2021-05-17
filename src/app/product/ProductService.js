import Environment from '../../config/environments';
import readXlsxFile from 'read-excel-file/node'


const config = Environment.config;

class ProductService {
  async find (q) {
    const result = await User.find(q);
    return result;
  }

  async findOne (q) {
    const result = await User.findOne(q);
    return result;
  }

  async loadExcel () {
    readXlsxFile('/path/to/file').then((rows) => {
      console.log(rows)
      // `rows` is an array of rows
      // each row being an array of cells.
    })
  }

  
}

export default new ProductService();
