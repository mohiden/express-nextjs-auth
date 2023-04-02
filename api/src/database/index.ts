import mongoose from "mongoose";


const URI = "mongodb://127.0.0.1:27017/todo-assignment"

export const makeConnection = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connected to DB.");
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
};