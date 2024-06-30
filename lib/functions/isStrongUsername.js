"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isStrongUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9_]{6,}$/;
    return usernameRegex.test(username);
};
exports.default = isStrongUsername;
