"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _environments = _interopRequireDefault(require("../environments"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const config = _environments.default.config;
var DBInstance = '';
const dbConectionString = config.DB_URL;

class DBConection {
  constructor() {
    if (!DBInstance) {
      _mongoose.default.connect(dbConectionString, {
        useNewUrlParser: true
      });

      DBInstance = 'DBInstance';
    }
  }

  errorHandler() {
    const db = _mongoose.default.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
      console.info(`${dbConectionString} DB is Connected with this App`);
    });
  }

}

var _default = DBConection;
exports.default = _default;
//# sourceMappingURL=connection.js.map