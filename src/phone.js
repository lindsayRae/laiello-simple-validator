
//const PHONE_REGEX = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/gm;
const PHONE_REGEX = /^\(?([0-9]{3})\)?[-.●,/\s/]?([0-9]{3})[-.●,/\s/]?([0-9]{4})$/;

/**
 * RegEx Resource: https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s02.html#:~:text=Allow%20a%20leading%20%E2%80%9C1%E2%80%9D&text=In%20addition%20to%20the%20phone,%2D123%2D456%2D7890%20.
 * @method isPhoneNumber
 * @description Given a string, returns true if string is a US phone number format. String cannot include the country code. 
 * @param {String} string - Phone number user entered 
 * @returns {Boolean} boolean
 */

export const isPhoneNumber = (string) => {
    try {       
        return PHONE_REGEX.test(string)
    } catch (error) {
        return false
    }
}

