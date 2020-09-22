"use strict";

var _email = require("./email");

describe('isEmail', function () {
  test('isEmail is true when I pass test@email.com', function () {
    expect((0, _email.isEmail)('test@email.com')).toBe(true);
  });
  test('isEmail is false when I pass null', function () {
    expect((0, _email.isEmail)(null)).toBe(false);
  });
  test('isEmail is false when I pass an object', function () {
    expect((0, _email.isEmail)({})).toBe(false);
  });
  test('isEmail is false when I pass an empty string', function () {
    expect((0, _email.isEmail)('')).toBe(false);
  });
});