import {Application} from '../application/Application';
import {notFound} from '../middleware/not-found.middleware';
import UserRouter from '../routers/UserRouter';

export const createServer = (port: string) => {
	const app = new Application(port);

	app.attachRouter(UserRouter);

	app.attachMiddleware(notFound);

	return app;
};
