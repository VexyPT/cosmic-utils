"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isUrl = (url) => {
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlRegex.test(url);
};
exports.default = isUrl;
