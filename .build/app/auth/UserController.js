"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _UserService = _interopRequireDefault(require("./UserService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UserController {
  login(req, res) {
    let body = req.body;

    _UserService.default.isValidUser(body).then(token => res.status(200).send({
      token: token
    })).catch(err => res.status(500).send({
      error: err.message
    }));
  }

  register(req, res) {
    let body = req.body;

    _UserService.default.create(body).then(token => res.status(201).send({
      token: token
    })).catch(err => res.status(500).send({
      error: err.message
    }));
  }

  search(req, res) {
    _UserService.default.find({}).then(result => res.status(200).send({
      users: result
    })).catch(err => res.status(500).send({
      error: err.message
    }));
  }

  update() {}

  delete() {}

}

var _default = new UserController();

exports.default = _default;
//# sourceMappingURL=UserController.js.map