import mongoose from 'mongoose';
import { ITodo } from 'src/lib';

const COLLECTION_NAME = "todos";

const schema = new mongoose.Schema<ITodo>({
    description: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    isCompleted: {
        type: mongoose.Schema.Types.Boolean,
        default: false,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },

}, {
    timestamps: true
})

export const TodoModel = mongoose.model<ITodo>(
    "Todo",
    schema,
    COLLECTION_NAME
);