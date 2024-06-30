"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRegexColor = isRegexColor;
function isRegexColor(color) {
    const colorRegex = /^#[0-9A-F]{6}$/i;
    return colorRegex.test(color);
}
