"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BuyRequest extends _mongoose.default.Schema {
  constructor() {
    const BuySchema = {
      product: {
        type: String,
        lowercase: true,
        trim: true
      },
      storage: [],
      price: [{}]
    };
    const buy = super(BuySchema, {
      timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
      }
    });
    return buy;
  }

}

var _default = _mongoose.default.model('BuyRequest', new BuyRequest());

exports.default = _default;
//# sourceMappingURL=BuyRequestModel.js.map