"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const COLLECTION_NAME = "todos";
const schema = new mongoose_1.default.Schema({
    description: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
    },
    isCompleted: {
        type: mongoose_1.default.Schema.Types.Boolean,
        default: false,
    },
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
}, {
    timestamps: true
});
exports.TodoModel = mongoose_1.default.model("Todo", schema, COLLECTION_NAME);
//# sourceMappingURL=todo.model.js.map