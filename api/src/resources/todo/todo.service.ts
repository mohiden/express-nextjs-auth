import { DocumentDefinition } from "mongoose";
import { ITodo } from "../../lib";
import { TodoModel } from "./todo.model";

export class TodoService {
    public async createOrUpdateTodo(input: DocumentDefinition<Omit<ITodo, "createdAt" | "updatedAt">>) {
        // return await TodoModel.updateOne({ _id: input.id }, omit(input, input.id), { upsert: true })
        return TodoModel.create(input);
    }
    public async getAllTodos() {
        return await TodoModel.find({});
    }

}