"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEmail = void 0;

// @ts-check

/**
 * @method isEmail 
 * @description Given a string, returns true if string is an email using a regular expresstion
 * @param {String} string - Email user entered 
 * @returns {Boolean} boolean 
 * 
 */
var isEmail = function isEmail(string) {
  var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(string.toLowerCase());
};

exports.isEmail = isEmail;