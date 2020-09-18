// @ts-check

/**
 * @method isEmail 
 * @description Given a string, returns true if string is an email using a regular expresstion
 * @param {String} string - Email user entered 
 * @returns {Boolean} boolean 
 * 
 */
export const isEmail = (string) => {  
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(string.toLowerCase())
}

