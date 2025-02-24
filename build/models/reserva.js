"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var reserva = new _mongoose.Schema({
  usuario: {
    type: String,
    require: true
  },
  fecha: {
    type: Date
  },
  hora: {
    type: String
  },
  habitacion: {
    type: String,
    require: true
  },
  precio: {
    type: Number,
    require: true
  },
  estado: {
    type: String,
    require: true
  }
}, {
  timestamps: true,
  versionKey: false
});
var _default = exports["default"] = (0, _mongoose.model)('Reserva', reserva);