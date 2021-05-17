"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
let configInstace = null;

class Config {
  constructor() {
    if (!configInstace) {
      this.config = process.env;
      configInstace = 'ConfigInstace';
    }
  }

  set config(env) {
    this.PORT = env.PORT || '3000';
    this.API_ROOT_PATH = env.PORT || 'api';
    this.DB_URL = env.DB_URL || 'mongodb://127.0.0.1:27017/node-babel';
    this.JWT_TOKEN_SECRECT = null;
  }

  get config() {
    return this;
  }

}

exports.default = Config;
//# sourceMappingURL=config.js.map