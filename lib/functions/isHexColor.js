"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHexColor = isHexColor;
function isHexColor(color) {
    const hexColorRegex = /^#[0-9A-Fa-f]{6}$/;
    return hexColorRegex.test(color);
}
