"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const todo_model_1 = require("./todo.model");
class TodoService {
    async createOrUpdateTodo(input) {
        return todo_model_1.TodoModel.create(input);
    }
    async getAllTodos() {
        return await todo_model_1.TodoModel.find({});
    }
}
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map