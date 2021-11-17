"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// SETUP BABEL WITH EXPRESS JS 
// since we would be writing the ES6 Javascript code , but the may or may not understand it 
// so to make it comaptible we setup baabel along with express.js
// const express = require('express')
var app = (0, _express["default"])();
var port = 3000;
app.get('/', function (req, res) {
  res.send('Hello dost!!!');
});
app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});