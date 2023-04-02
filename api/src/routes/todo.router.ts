import { Router } from 'express';
import { requireUser, validateResource } from '../middlewares';
import { TodoController, TodoSchema } from '../resources';

const router = Router();

const controller = new TodoController();

router.get("/", controller.getAllTodosHandler);
router.post("/", [requireUser, validateResource(TodoSchema.createOrUpdateTodoSchema)], controller.createOrUpdateTodoHandler);


export default router;
