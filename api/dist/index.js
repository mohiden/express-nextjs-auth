"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const database_1 = require("./database");
const middlewares_1 = require("./middlewares");
const routing_1 = require("./routing");
const cors_1 = __importDefault(require("cors"));
const main = async (app) => {
    app.use((0, cors_1.default)({
        origin: ['http://localhost:3001'],
    }));
    app.use(express_1.default.json());
    app.use(middlewares_1.deserializeUser);
    await (0, database_1.makeConnection)();
    app.listen(3000, () => {
        console.log("Running!");
    });
    (0, routing_1.routing)(app);
};
main((0, express_1.default)());
//# sourceMappingURL=index.js.map