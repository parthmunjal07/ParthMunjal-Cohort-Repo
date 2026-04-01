import express from "express";
import { authRouter } from "./auth/routes.js";
import { authenticationMiddleware } from "./auth/middleware.js";
export function createApplication() {
    const app = express();
    // middlewares
    app.use(express.json());
    app.use(authenticationMiddleware());
    //routes
    app.get('/', (req, res) => {
        return res.json({ message: "Welcome to CC auth service" });
    });
    app.use('/auth', authRouter);
    return app;
}
//# sourceMappingURL=index.js.map