"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isAlphanumeric = (input) => {
    const alphanumericRegex = /^[a-z0-9]+$/i;
    return alphanumericRegex.test(input);
};
exports.default = isAlphanumeric;
