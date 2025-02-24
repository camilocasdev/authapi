"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _reservarRoutes = _interopRequireDefault(require("./routes/reservar.routes.js"));
var _authRoutes = _interopRequireDefault(require("./routes/auth.routes.js"));
var _userRoutes = _interopRequireDefault(require("./routes/user.routes.js"));
var _htmlRoutes = _interopRequireDefault(require("./routes/html.routes.js"));
var _initialSetup = require("./libs/initialSetup.js");
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var app = (0, _express["default"])();
(0, _initialSetup.crearRole)();
app.set((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use((0, _cookieParser["default"])());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use('/', _htmlRoutes["default"]);
app.use('/reserva', _reservarRoutes["default"]);
app.use('/auth', _authRoutes["default"]);
app.use('/restr', _userRoutes["default"]);
var _default = exports["default"] = app;