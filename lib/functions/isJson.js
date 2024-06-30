"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isJson = (input) => {
    try {
        JSON.parse(input);
        return true;
    }
    catch (e) {
        return false;
    }
};
exports.default = isJson;
