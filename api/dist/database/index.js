"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const URI = "mongodb://127.0.0.1:27017/todo-assignment";
const makeConnection = async () => {
    try {
        await mongoose_1.default.connect(URI);
        console.log("Connected to DB.");
    }
    catch (e) {
        console.log(e);
        process.exit(1);
    }
};
exports.makeConnection = makeConnection;
//# sourceMappingURL=index.js.map