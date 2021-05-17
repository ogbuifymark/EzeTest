"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _validator = require("validator");

var _UserMiddlerware = require("./UserMiddlerware");

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class User extends _mongoose.default.Schema {
  constructor() {
    const UserSchema = {
      firstName: {
        type: String,
        lowercase: true,
        trim: true
      },
      lastName: {
        type: String,
        lowercase: true,
        trim: true
      },
      userName: {
        type: String,
        trim: true,
        required: [true, 'required username'],
        unique: true
      },
      email: {
        type: String,
        trim: true,
        required: [true, 'required email'],
        unique: true,
        validate: [_validator.isEmail, 'invalid email']
      },
      passwordHash: {
        type: String,
        required: [true, 'required password'],
        trim: true
      }
    };
    const user = super(UserSchema, {
      timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
      }
    });
    user.plugin(_UserMiddlerware.UserMiddlerware);

    const validatePassword = (password, passwordHash) => {
      return _bcrypt.default.compareSync(password, passwordHash);
    };

    const createPasswordHash = password => {
      return _bcrypt.default.hashSync(password, 10);
    };

    user.methods.validatePassword = validatePassword;
    user.methods.createPasswordHash = createPasswordHash;
    return user;
  }

}

var _default = _mongoose.default.model('User', new User());

exports.default = _default;
//# sourceMappingURL=UserModel.js.map