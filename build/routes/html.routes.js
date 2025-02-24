"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _path = _interopRequireDefault(require("path"));
var _authjwt = require("../middlewares/authjwt.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = (0, _express.Router)();
var basePath = _path["default"].resolve('.');
router.get('/', function (req, res) {
  res.sendFile(_path["default"].join(basePath, "src", "pages", "login.html"));
});
router.get('/register', function (req, res) {
  res.sendFile(_path["default"].join(basePath, "src", "pages", "signup.html"));
});
router.get('/postlog', [_authjwt.verifyToken], function (req, res) {
  res.sendFile(_path["default"].join(basePath, "src", "pages", "postlog.html"));
});
var _default = exports["default"] = router;