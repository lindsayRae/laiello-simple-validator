import { isPhoneNumber } from './phone';

describe('isPhoneNumber basic functionality', () => {
  test('isPhoneNumber is true when I pass 1234567890', () => {
    expect(isPhoneNumber('1234567890')).toBe(true);
  });

  test('isPhoneNumber is true when I pass 123-456-7890', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
  });

  test('isPhoneNumber is true when I pass 123.456.7890', () => {
    expect(isPhoneNumber('123.456.7890')).toBe(true);
  });

  test('isPhoneNumber is true when I pass (123) 456-7890', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
  });

  test('isPhoneNumber is true when I pass 123 456 7890', () => {
    expect(isPhoneNumber('123 456 7890')).toBe(true);
  });

  test('isPhoneNumber is true when I pass (123)456-7890', () => {
    expect(isPhoneNumber('(123)456-7890')).toBe(true);
  });

  test('isPhoneNumber is false when I pass 123-4567', () => {
    expect(isPhoneNumber('123-4567')).toBe(false);
  });

  test('isPhoneNumber is false when I pass null', () => {
    expect(isPhoneNumber(null)).toBe(false);
  });

  test('isPhoneNumber is false when I pass an object', () => {
    expect(isPhoneNumber({})).toBe(false);
  });

  test('isPhoneNumber is false when I pass an array', () => {
    expect(isPhoneNumber([])).toBe(false);
  });

  test('isPhoneNumber is false when I pass an empty string', () => {
    expect(isPhoneNumber('')).toBe(false);
  });
});

describe('isPhoneNumber with country code "1"', () => {
  test('isPhoneNumber is false when I pass 1-555-555-5555', () => {
    expect(isPhoneNumber('1-555-555-5555')).toBe(false);
  });
});
