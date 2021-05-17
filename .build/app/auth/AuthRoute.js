"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _UserController = _interopRequireDefault(require("./UserController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.post('/login', _UserController.default.login);
router.post('/register', _UserController.default.register);
var _default = router;
exports.default = _default;
//# sourceMappingURL=AuthRoute.js.map