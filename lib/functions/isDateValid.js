"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDateValid = isDateValid;
function isDateValid(date) {
    return !isNaN(Date.parse(date));
}
