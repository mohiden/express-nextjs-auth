import { Application } from "express"
import { todoRoutes, userRoutes } from "./routes";

export const routing = (app: Application) => {

    app.get("/healthCheck", (_, res) => {
        res.send("Working");
    });



    app.use("/api/user", userRoutes);

    app.use("/api/todo", todoRoutes);


}