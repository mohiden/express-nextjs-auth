import { Request, Response } from "express";
import { TodoModel } from "./todo.model";
import { CreateOrUpdateTodoInput } from "./todo.schema";
// import { TodoService } from "./todo.service"
import mongoose from 'mongoose';

export class TodoController {
    // private readonly todoService: TodoService;
    constructor() {
        // this.todoService = new TodoService();
    }


    public async createOrUpdateTodoHandler(req: Request<{}, {}, CreateOrUpdateTodoInput['body']>, res: Response) {
        try {
            req.body.user = res.locals.user._id;
            if (!req.body._id) {
                req.body._id = new mongoose.mongo.ObjectId as any;
            }
            const todo = await TodoModel.updateOne({ _id: req.body._id }, req.body, { upsert: true, new: true })
            return res.send(todo);
        } catch (e) {
            return res.status(500).send(e.message);
        }
    }


    public async getAllTodosHandler(_: Request, res: Response) {
        try {
            // const todos = await this.todoService.getAllTodos();
            const todos = await TodoModel.find();
            return res.send(todos)
        } catch (e) {
            return res.status(500).send(e.message);
        }
    }

}