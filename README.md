# laiello-simple-validator
A set of utility function totest if the given string is a phone number or email.
## Installation
``` 
npm i laiello-simple-validator
```
## Example
```javascript
// import the functions 
import { isEmail, isPhoneNumber } from 'laiello-simple-validator'

// use it 
const result = isEmail('test@email.com')
```
## Functions
### isEmail
Given a string, returns true if string is an email using a regular expresstion
| Parameter | Description        |
|-----------|--------------------|
| string    | Email user entered |
