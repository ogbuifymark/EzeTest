"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ProductService = _interopRequireDefault(require("./ProductService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProductController {
  loadExcel(req, res) {
    _ProductService.default.loadExcel().then(result => res.status(200).send({
      users: result
    })).catch(err => res.status(500).send({
      error: err.message
    }));
  }

}

var _default = new ProductController();

exports.default = _default;
//# sourceMappingURL=ProductController.js.map