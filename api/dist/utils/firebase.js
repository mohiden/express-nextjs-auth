"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseAdmin = void 0;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const serviceAccountKey_json_json_1 = __importDefault(require("./serviceAccountKey.json.json"));
exports.firebaseAdmin = firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(serviceAccountKey_json_json_1.default)
});
//# sourceMappingURL=firebase.js.map