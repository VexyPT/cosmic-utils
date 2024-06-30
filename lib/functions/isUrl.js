"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUrl = isUrl;
function isUrl(url) {
    try {
        new URL(url);
        return true;
    }
    catch (_) {
        return false;
    }
}
