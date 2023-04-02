"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middlewares_1 = require("../middlewares");
const resources_1 = require("../resources");
const router = (0, express_1.Router)();
const controller = new resources_1.TodoController();
router.get("/", controller.getAllTodosHandler);
router.post("/", [middlewares_1.requireUser, (0, middlewares_1.validateResource)(resources_1.TodoSchema.createOrUpdateTodoSchema)], controller.createOrUpdateTodoHandler);
exports.default = router;
//# sourceMappingURL=todo.router.js.map