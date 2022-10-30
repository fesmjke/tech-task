import { Application } from "../application/Application"
import UserRouter from '../routers/UserRouter';

export const createServer = (port : string) => {
    const app = new Application(port);

    app.attachRouter(UserRouter);

    return app;
}