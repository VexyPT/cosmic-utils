"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRgbColor = isRgbColor;
function isRgbColor(color) {
    const rgbRegex = /^rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$/;
    const result = rgbRegex.exec(color);
    return result !== null && result.slice(1).every(num => parseInt(num) >= 0 && parseInt(num) <= 255);
}
exports.default = isRgbColor;
