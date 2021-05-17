"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Test extends _config.default {
  constructor() {
    super();
    this.JWT_TOKEN_SECRECT = 'RESTFULAPIs';
    this.DB_URL = 'mongodb://127.0.0.1:27017/node-babel-test';
    this.PORT = 3001;
  }

  testConfig() {
    return this.config;
  }

}

var _default = new Test().testConfig();

exports.default = _default;
//# sourceMappingURL=test.js.map