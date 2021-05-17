"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Route {
  constructor() {
    this.apiPathName = 'api';
    this.versionNumber = 'v1';
  }

  fullPath() {
    return '/' + this.apiPathName + '/' + this.versionNumber;
  }

  getUrl(url) {
    url = url + '';
    url = url[0] === '/' ? url : '/' + url;
    return url;
  }

}

var _default = new Route();

exports.default = _default;
//# sourceMappingURL=route.index.js.map