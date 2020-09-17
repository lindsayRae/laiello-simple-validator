



/**
 * RegEx Resource: https://www.regexpal.com/17
 * @method isPhoneNumber
 * @description Given a string, returns true if string is a phone numebr
 * @param {String} string 
 */

export const isPhoneNumber = (str) => {
    var phoneRegex = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/gm;
    if(str.match(phoneRegex)) return true
    else return false
}