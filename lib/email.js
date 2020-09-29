"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEmail = void 0;
// @ts-check
var EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
/**
 * @method isEmail 
 * @description Given a string, returns true if string is in email format using RegExp
 * @param {String} string - Email user entered 
 * @returns {Boolean} boolean 
 * 
 */

var isEmail = function isEmail(string) {
  try {
    return EMAIL_REGEX.test(string.toLowerCase());
  } catch (error) {
    return false;
  }
};

exports.isEmail = isEmail;