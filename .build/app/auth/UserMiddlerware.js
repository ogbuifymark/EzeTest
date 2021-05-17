"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserMiddlerware = UserMiddlerware;

function UserMiddlerware(schema, options) {
  schema.pre('validate', function (next) {
    // console.log(this);
    next();
  });
  schema.pre('save', function (next) {
    // console.log(this);
    next();
  });
}
//# sourceMappingURL=UserMiddlerware.js.map