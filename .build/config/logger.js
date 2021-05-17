"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _morgan = _interopRequireDefault(require("morgan"));

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let loggerInstace = null;

var _default = new class Logger {
  constructor() {
    if (!loggerInstace) {
      let accessLogStream = _fs.default.createWriteStream(_path.default.join(process.cwd(), 'public/logs/access.log'), {
        flags: 'a'
      });

      this.logger = (0, _morgan.default)('combined', {
        stream: accessLogStream
      });
    }
  }

  get loggerMiddlerware() {
    return this.logger;
  }

  get devLogger() {
    return (0, _morgan.default)('dev');
  }

}();

exports.default = _default;
//# sourceMappingURL=logger.js.map