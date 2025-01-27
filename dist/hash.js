"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hash = void 0;
const sjcl = require("sjcl");
function hash(text) {
    var hashed = sjcl.hash.sha256.hash(text);
    return sjcl.codec.base64.fromBits(hashed);
}
exports.hash = hash;
//# sourceMappingURL=hash.js.map