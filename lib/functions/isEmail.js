"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
exports.default = isEmail;
