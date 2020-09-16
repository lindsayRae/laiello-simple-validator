
/**
 * @method isEmail 
 * @description Given a string, returns true if string is an email using a regular expresstion
 * @param {String} string 
 * 
 */
export const isEmail = (string) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(string.toLowerCase())
}

