import { BaseModel, IUser } from ".";

export interface ITodo extends BaseModel {
    description: string;
    isCompleted: boolean;
    user: IUser['_id'];
}