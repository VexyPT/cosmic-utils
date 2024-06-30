"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isPalindrome = (input) => {
    const normalized = input.replace(/[^a-z0-9]/gi, '').toLowerCase();
    return normalized === normalized.split('').reverse().join('');
};
exports.default = isPalindrome;
