# meteor lib

[![npm version](https://badge.fury.io/js/cosmic-utils.svg)](https://badge.fury.io/js/cosmic-utils)

Meteor Lib is a collection of utility functions for various validations. 

## Installation

You can install the package using npm:

```bash
npm install cosmic-utils
```

## How to use

```ts
const {
    isEmail,
    isUrl,
    isNumeric,
    isPhoneNumber,
    isRegexColor,
    isRgbColor,
    isGreaterThan,
    isLessThan,
    isEqual,
    isPasswordStrong,
    isDateValid,
    isHexColor,
    isIPv4,
    isAlphanumeric,
    isEmpty,
    isBoolean,
    isJson,
    isPalindrome,
    isStrongUsername
} = require('cosmic-utils');

// isEmail Usage
console.log(isEmail('test@example.com')); // true
console.log(isEmail('invalid-email')); // false

// isUrl Usage
console.log(isUrl('https://example.com')); // true
console.log(isUrl('invalid-url')); // false

// isNumeric Usage
console.log(isNumeric('12345')); // true
console.log(isNumeric('123a45')); // false

// isPhoneNumber Usage
console.log(isPhoneNumber('(123) 456-7890')); // true
console.log(isPhoneNumber('invalid-phone-number')); // false

// isRegexColor Usage
console.log(isRegexColor('#AABBCC')); // true
console.log(isRegexColor('AABBCC')); // false

// isRgbColor Usage
console.log(isRgbColor('rgb(255, 255, 255)')); // true
console.log(isRgbColor('rgb(255, 255, 256)')); // false

// isGreaterThan Usage
console.log(isGreaterThan(10, 5)); // true
console.log(isGreaterThan(5, 10)); // false

// isLessThan Usage
console.log(isLessThan(5, 10)); // true
console.log(isLessThan(10, 5)); // false

// isEqual Usage
console.log(isEqual(5, 5)); // true
console.log(isEqual(5, '5')); // false

// isPasswordStrong Usage
console.log(isPasswordStrong('Str0ng!Pass')); // true
console.log(isPasswordStrong('weakpass')); // false

// isDateValid Usage
console.log(isDateValid('2023-06-30')); // true
console.log(isDateValid('invalid-date')); // false

// isHexColor Usage
console.log(isHexColor('#AABBCC')); // true
console.log(isHexColor('AABBCC')); // false

// isIPv4 Usage
console.log(isIPv4('192.168.0.1')); // true
console.log(isIPv4('999.999.999.999')); // false

// isAlphanumeric Usage
console.log(isAlphanumeric('abc123')); // true
console.log(isAlphanumeric('abc!123')); // false

// isEmpty Usage
console.log(isEmpty('')); // true
console.log(isEmpty('not empty')); // false

// isBoolean Usage
console.log(isBoolean(true)); // true
console.log(isBoolean('true')); // false

// isJson Usage
console.log(isJson('{"key":"value"}')); // true
console.log(isJson('invalid json')); // false

// isPalindrome Usage
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello')); // false

// isStrongUsername Usage
console.log(isStrongUsername('username_123')); // true
console.log(isStrongUsername('us')); // false

```