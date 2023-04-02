"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = exports.todoRoutes = void 0;
const todo_router_1 = __importDefault(require("./todo.router"));
exports.todoRoutes = todo_router_1.default;
const user_router_1 = __importDefault(require("./user.router"));
exports.userRoutes = user_router_1.default;
//# sourceMappingURL=index.js.map