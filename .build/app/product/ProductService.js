"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _environments = _interopRequireDefault(require("../../config/environments"));

var _node = _interopRequireDefault(require("read-excel-file/node"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const config = _environments.default.config;

class ProductService {
  async find(q) {
    const result = await User.find(q);
    return result;
  }

  async findOne(q) {
    const result = await User.findOne(q);
    return result;
  }

  async loadExcel() {
    (0, _node.default)('/path/to/file').then(rows => {
      console.log(rows); // `rows` is an array of rows
      // each row being an array of cells.
    });
  }

}

var _default = new ProductService();

exports.default = _default;
//# sourceMappingURL=ProductService.js.map