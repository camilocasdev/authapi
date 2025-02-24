"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkExisteRol = void 0;
var _role = require("../models/role.js");
var _user = _interopRequireDefault(require("../models/user"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var checkExisteRol = exports.checkExisteRol = function checkExisteRol(req, res, next) {
  if (req.body.role) {
    for (var i = 0; i < req.body.role.length; i++) {
      if (!_role.Role.include(req.body.role[i])) {
        res.status(400).json({
          message: "Role ".concat(req.body.roles[i], " does not exist")
        });
      }
    }
  }
};