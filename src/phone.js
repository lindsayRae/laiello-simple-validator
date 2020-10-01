const PHONE_REGEX = /^\(?([0-9]{3})\)?[-.●,/\s/]?([0-9]{3})[-.●,/\s/]?([0-9]{4})$/;
/**
 * RegEx Resource: https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s02.html#:~:text=Allow%20a%20leading%20%E2%80%9C1%E2%80%9D&text=In%20addition%20to%20the%20phone,%2D123%2D456%2D7890%20.
 * @method isPhoneNumber
 * @description
 * Given a string, returns true if string is in email format using RegExp.
 * This will consiste of 10 digit phone numbers.
 * Does not include the country code of '1'. Vaild formats are as follows:
 * 1234567890, 123-456-7890, 123.456.7890, (123) 456-7890, 123 456 7890, (123)456-7890
 * @param {String} string - Phone number user entered
 * @returns {Boolean} boolean
 */

// eslint-disable-next-line no-use-before-define
export const isPhoneNumber = (string) => {
  try {
    return PHONE_REGEX.test(string);
  } catch (error) {
    return false;
  }
};
