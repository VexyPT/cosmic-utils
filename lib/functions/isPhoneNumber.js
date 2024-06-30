"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPhoneNumber = isPhoneNumber;
function isPhoneNumber(phone) {
    const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
    return phoneRegex.test(phone);
}
