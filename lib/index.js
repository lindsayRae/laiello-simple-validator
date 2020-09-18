"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "isEmail", {
  enumerable: true,
  get: function get() {
    return _email.isEmail;
  }
});
Object.defineProperty(exports, "isPhoneNumber", {
  enumerable: true,
  get: function get() {
    return _phone.isPhoneNumber;
  }
});

var _email = require("./email");

var _phone = require("./phone");

//console.log(isEmail('lindsay@test.com'))
console.log((0, _phone.isPhoneNumber)('555-5555'));