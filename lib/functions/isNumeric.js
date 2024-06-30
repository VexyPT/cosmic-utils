"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumeric = isNumeric;
function isNumeric(value) {
    return /^\d+$/.test(value);
}
