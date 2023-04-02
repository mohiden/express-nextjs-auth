"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routing = void 0;
const routes_1 = require("./routes");
const routing = (app) => {
    app.get("/healthCheck", (_, res) => {
        res.send("Working");
    });
    app.use("/api/user", routes_1.userRoutes);
    app.use("/api/todo", routes_1.todoRoutes);
};
exports.routing = routing;
//# sourceMappingURL=routing.js.map