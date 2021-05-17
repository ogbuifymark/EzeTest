"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _development = _interopRequireDefault(require("./development"));

var _production = _interopRequireDefault(require("./production"));

var _test = _interopRequireDefault(require("./test"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.info(process.env['NODE_ENV']);
process.env['NODE_ENV'] = process.env['NODE_ENV'] || 'development';
const ENV = process.env.NODE_ENV;
let instance = null;

class Environment {
  constructor() {
    if (!instance) {
      _dotenv.default.config();

      let config;

      switch (ENV) {
        case 'production':
          config = _production.default;
          break;

        case 'test':
          config = _test.default;
          break;

        default:
          config = _development.default;
      }

      this.configVal = config;
    }
  }

  get config() {
    return this.configVal;
  }

}

var _default = new Environment();

exports.default = _default;
//# sourceMappingURL=index.js.map