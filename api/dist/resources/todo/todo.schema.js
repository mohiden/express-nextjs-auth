"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoSchema = void 0;
const zod_1 = require("zod");
class TodoSchema {
}
exports.TodoSchema = TodoSchema;
TodoSchema.createOrUpdateTodoSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        _id: (0, zod_1.string)({}).optional(),
        description: (0, zod_1.string)({
            required_error: "Description must not be empty",
        }),
        user: (0, zod_1.string)().optional(),
        isCompleted: (0, zod_1.boolean)().default(false)
    })
});
//# sourceMappingURL=todo.schema.js.map