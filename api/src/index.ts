import 'dotenv/config';
import express, { Application } from 'express';
import { makeConnection } from './database';
import { deserializeUser } from './middlewares';
import { routing } from './routing';
import cors from 'cors';

const main = async (app: Application) => {

    app.use(cors({
        origin: ['http://localhost:3001'],
    }));
    app.use(express.json());
    app.use(deserializeUser);
    // connect to db.
    await makeConnection();

    app.listen(3000, () => {
        console.log("Running!");
    })

    routing(app);
}


main(express());