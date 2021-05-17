"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Production extends _config.default {
  constructor() {
    super();
    this.prodConfig();
  }

  prodConfig() {
    return this.config;
  }

}

var _default = new Production().prodConfig();

exports.default = _default;
//# sourceMappingURL=production.js.map