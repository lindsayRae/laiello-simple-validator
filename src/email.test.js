
import {isEmail} from './email'

describe('isEmail basic functionality', () => {
    test('isEmail is true when I pass test@email.com', () => {
        expect(isEmail('test@email.com')).toBe(true)
    })

    test('isEmail is false when I pass null', () => {
        expect(isEmail(null)).toBe(false)
    })

    test('isEmail is false when I pass an object', () => {
        expect(isEmail({})).toBe(false)
    })

    test('isEmail is false when I pass an empty string', () => {
        expect(isEmail('')).toBe(false)
    })

    
})

describe('isEmail newer domains', () => {
    test('isEmail is true when I pass alex@poly.market', () => {
        expect(isEmail('alex@poly.market')).toBe(true)
    })
})