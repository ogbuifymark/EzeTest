"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Development extends _config.default {
  constructor() {
    super();
    this.JWT_TOKEN_SECRECT = 'RESTFULAPIs';
  }

  devConfig() {
    return this.config;
  }

}

var _default = new Development().devConfig();

exports.default = _default;
//# sourceMappingURL=development.js.map