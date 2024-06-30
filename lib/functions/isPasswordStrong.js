"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPasswordStrong = isPasswordStrong;
function isPasswordStrong(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}
exports.default = isPasswordStrong;
