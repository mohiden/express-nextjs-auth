import mongoose from "mongoose";


const URI = process.env.DATABASE_URI!;

export const makeConnection = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connected to DB.");
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
};