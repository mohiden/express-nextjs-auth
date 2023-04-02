"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
const todo_model_1 = require("./todo.model");
const mongoose_1 = __importDefault(require("mongoose"));
class TodoController {
    constructor() {
    }
    async createOrUpdateTodoHandler(req, res) {
        try {
            req.body.user = res.locals.user._id;
            if (!req.body._id) {
                req.body._id = new mongoose_1.default.mongo.ObjectId;
            }
            const todo = await todo_model_1.TodoModel.updateOne({ _id: req.body._id }, req.body, { upsert: true, new: true });
            return res.send(todo);
        }
        catch (e) {
            return res.status(500).send(e.message);
        }
    }
    async getAllTodosHandler(_, res) {
        try {
            const todos = await todo_model_1.TodoModel.find();
            return res.send(todos);
        }
        catch (e) {
            return res.status(500).send(e.message);
        }
    }
}
exports.TodoController = TodoController;
//# sourceMappingURL=todo.controller.js.map