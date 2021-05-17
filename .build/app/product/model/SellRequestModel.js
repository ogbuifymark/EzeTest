"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SellRequest extends _mongoose.default.Schema {
  constructor() {
    const SellSchema = {
      product: {
        type: String,
        lowercase: true,
        trim: true
      },
      storage: [],
      price: [{}]
    };
    const buy = super(SellSchema, {
      timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
      }
    });
    return buy;
  }

}

var _default = _mongoose.default.model('SellRequest', new SellRequest());

exports.default = _default;
//# sourceMappingURL=SellRequestModel.js.map