"use strict";

var _phone = require("./phone");

describe('isPhoneNumber basic functionality', function () {
  test('isPhoneNumber is true when I pass 1234567890', function () {
    expect((0, _phone.isPhoneNumber)('1234567890')).toBe(true);
  });
  test('isPhoneNumber is true when I pass 123-456-7890', function () {
    expect((0, _phone.isPhoneNumber)('123-456-7890')).toBe(true);
  });
  test('isPhoneNumber is true when I pass 123.456.7890', function () {
    expect((0, _phone.isPhoneNumber)('123.456.7890')).toBe(true);
  });
  test('isPhoneNumber is true when I pass (123) 456-7890', function () {
    expect((0, _phone.isPhoneNumber)('(123) 456-7890')).toBe(true);
  });
  test('isPhoneNumber is true when I pass 123 456 7890', function () {
    expect((0, _phone.isPhoneNumber)('123 456 7890')).toBe(true);
  });
  test('isPhoneNumber is true when I pass (123)456-7890', function () {
    expect((0, _phone.isPhoneNumber)('(123)456-7890')).toBe(true);
  });
  test('isPhoneNumber is false when I pass 123-4567', function () {
    expect((0, _phone.isPhoneNumber)('123-4567')).toBe(false);
  });
  test('isPhoneNumber is false when I pass null', function () {
    expect((0, _phone.isPhoneNumber)(null)).toBe(false);
  });
  test('isPhoneNumber is false when I pass an object', function () {
    expect((0, _phone.isPhoneNumber)({})).toBe(false);
  });
  test('isPhoneNumber is false when I pass an array', function () {
    expect((0, _phone.isPhoneNumber)([])).toBe(false);
  });
  test('isPhoneNumber is false when I pass an empty string', function () {
    expect((0, _phone.isPhoneNumber)('')).toBe(false);
  });
});
describe('isPhoneNumber with country code "1"', function () {
  test('isPhoneNumber is false when I pass 1-555-555-5555', function () {
    expect((0, _phone.isPhoneNumber)('1-555-555-5555')).toBe(false);
  });
});