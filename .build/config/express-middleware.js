"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _logger = _interopRequireDefault(require("./logger"));

var _route = _interopRequireDefault(require("./route/route.index"));

var _routes = _interopRequireDefault(require("./route/routes"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const swaggerDocument = require(process.cwd() + '/public/docs/swagger.json');

const parser = Symbol('parser');
const logger = Symbol('logger');
const router = Symbol('router');
const validateToken = Symbol('validateToken');
const swagger = Symbol('swagger');
let ExpressInstance = null;

class Express {
  constructor(config) {
    if (!ExpressInstance) {
      this.exApp = (0, _express.default)();
      this[parser]();
      this[logger]();
      this[router]();
      this[swagger]();
      this.errorHandler();
      this.config = config;
      ExpressInstance = 'Express';
    }
  }

  [parser]() {
    this.exApp.use((0, _cookieParser.default)());
    this.exApp.use(_bodyParser.default.urlencoded({
      extended: true
    }));
    this.exApp.use(_bodyParser.default.json());
  }

  [logger]() {
    this.exApp.use(_logger.default.loggerMiddlerware);
    this.exApp.use(_logger.default.devLogger);
  }

  [validateToken](isAuthGuard = true) {
    let router = _express.default.Router();

    let errorMsg = {
      reason: 'UnAuthorized Access'
    };
    router.use((req, res, next) => {
      if (isAuthGuard) {
        let token = req.headers['x-access-token'];

        if (!token) {
          res.status(403).send(errorMsg).end();
        } else {
          _jsonwebtoken.default.verify(token, this.config.JWT_TOKEN_SECRECT, (err, decoded) => {
            if (err) {
              errorMsg.reason = err;
              res.status(403).send(errorMsg);
            } else {
              next();
            }
          });
        }
      } else {
        next();
      }
    });
    return router;
  }

  [router]() {
    const router = _express.default.Router();

    _routes.default.every(route => {
      router.use(_route.default.getUrl(route.url), this[validateToken](route.gaurd), route.route);
      return true;
    });

    this.exApp.use(_route.default.fullPath(), router);
  }

  [swagger]() {
    this.exApp.use('/', _swaggerUiExpress.default.serve, _swaggerUiExpress.default.setup(swaggerDocument, {}));
  }

  errorHandler() {
    process.on('uncaughtException', err => {
      console.error('whoops! There was an uncaught error', err); // do a graceful shutdown,
      // close the database connection etc.
      // process.exit(1);
    });
  }

  get app() {
    return this.exApp;
  }

}

exports.default = Express;
//# sourceMappingURL=express-middleware.js.map