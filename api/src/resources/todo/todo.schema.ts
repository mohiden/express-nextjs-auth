import { boolean, object, string, TypeOf } from "zod";

export class TodoSchema {
    public static createOrUpdateTodoSchema = object({
        body: object({
            _id: string({}).optional(),
            description: string({
                required_error: "Description must not be empty",
            }),
            user: string().optional(),
            isCompleted: boolean().default(false)
        })
    })
}

export type CreateOrUpdateTodoInput = TypeOf<typeof TodoSchema.createOrUpdateTodoSchema>;



