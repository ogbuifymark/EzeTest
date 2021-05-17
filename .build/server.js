"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _environments = _interopRequireDefault(require("./config/environments"));

var _expressMiddleware = _interopRequireDefault(require("./config/express-middleware"));

var _connection = _interopRequireDefault(require("./config/db/connection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let serverInstace = null;
const config = _environments.default.config;

var _default = new class Server extends _expressMiddleware.default {
  constructor() {
    console.info(config);
    super(config);
    const port = config.PORT;

    if (!serverInstace) {
      this.app.listen(port, () => console.log(`Example app listening on port ${port}!`));
      this.DB();
      serverInstace = 'serverInstace';
    }
  }

  DB() {
    const db = new _connection.default();
    db.errorHandler();
  }

  expressApp() {
    return this.app;
  }

}();

exports.default = _default;
//# sourceMappingURL=server.js.map