import {Application} from './application/Application';
import UserRouter from './routers/UserRouter';
import dotenv from 'dotenv';

const main = async () => {
	dotenv.config();

	const port = process.env.PORT ?? '3000';

	const app = new Application(port);

	app.attachRouter(UserRouter);

	await app.start();
};

main().then(() => {
	console.log('Started!');
}).catch((e: Error) => {
	console.log(e.stack);
});
