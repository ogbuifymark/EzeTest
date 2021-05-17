"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _UserModel = _interopRequireDefault(require("./UserModel"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _environments = _interopRequireDefault(require("../../config/environments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const config = _environments.default.config;

class UserService {
  async find(q) {
    const result = await _UserModel.default.find(q);
    return result;
  }

  async findOne(q) {
    const result = await _UserModel.default.findOne(q);
    return result;
  }

  async create(q) {
    let user = new _UserModel.default(q);
    user.passwordHash = user.createPasswordHash(q.password);
    this.user = await user.save();
    return this.generateJwt();
  }

  async isValidUser(q) {
    let {
      userName,
      password
    } = q;
    let findQuery = {
      $or: [{
        userName: userName
      }, {
        email: userName
      }]
    };
    let user = await this.findOne(findQuery);

    if (user && user.validatePassword(password, user.passwordHash)) {
      this.user = user;
      return this.generateJwt();
    } else {
      throw new Error('User Not Found');
    }
  }

  generateJwt() {
    let secrect = config.JWT_TOKEN_SECRECT;
    return _jsonwebtoken.default.sign({
      email: this.user.email,
      fullName: this.user.fullName,
      _id: this.user._id
    }, secrect);
  }

}

var _default = new UserService();

exports.default = _default;
//# sourceMappingURL=UserService.js.map