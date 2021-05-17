"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _ProductController = _interopRequireDefault(require("./ProductController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.get('/', _ProductController.default.loadExcel);
var _default = router;
exports.default = _default;
//# sourceMappingURL=ProductRoute.js.map