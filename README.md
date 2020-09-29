# laiello-simple-validator
A set of utility functions to test if the given string is in a valid US phone number format or email format.
## Installation
``` 
npm i laiello-simple-validator
```
## Example
```javascript
// Import the functions 
import { isEmail, isPhoneNumber } from 'laiello-simple-validator'

// Usage 
const emailResult = isEmail('test@email.com') // returns true or false
const phoneResult = isPhoneNumber('test@email.com') // return true or false
```
## Functions
### isEmail
Given a string, returns true if string is in email format using RegExp
| Parameter | Description        |
|-----------|--------------------|
| string    | Email user entered |

### isPhoneNumber
Given a string, returns true if string is in email format using RegExp. This will consiste of 10 digit phone numbers. Does not include the country code of '1'. Vaild formats are as follows: 1234567890, 123-456-7890, 123.456.7890, (123) 456-7890, 123 456 7890, (123)456-7890
| Parameter | Description              |
|-----------|--------------------------|
| string    | Phone numer user entered |
