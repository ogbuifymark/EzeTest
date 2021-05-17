"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _UserRoute = _interopRequireDefault(require("../../app/auth/UserRoute"));

var _AuthRoute = _interopRequireDefault(require("../../app/auth/AuthRoute"));

var _ProductRoute = _interopRequireDefault(require("../../app/product/ProductRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Routes = [{
  url: 'users',
  route: _UserRoute.default
}, {
  url: 'auth',
  route: _AuthRoute.default,
  gaurd: false
}, {
  url: 'product',
  route: _ProductRoute.default,
  gaurd: false
}];
var _default = Routes;
exports.default = _default;
//# sourceMappingURL=routes.js.map