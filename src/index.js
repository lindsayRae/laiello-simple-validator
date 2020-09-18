import {isEmail} from './email'
import {isPhoneNumber} from './phone'

export {
    isEmail,
    isPhoneNumber
}

console.log(isEmail('lindsay@test.com'))
console.log(isPhoneNumber('303-555-5555'))

