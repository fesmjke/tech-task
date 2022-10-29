import {connect} from 'mongoose';
import {Application} from './application/Application';
import UserRouter from './routers/UserRouter';
import dotenv from 'dotenv';

const main = async () => {
	dotenv.config();

	const config = {
		server: {
			port: process.env.PORT ?? '3000',
		},
		database: {
			url: process.env.MONGO_URL ?? 'mongodb://127.0.0.1',
			port: process.env.MONGO_PORT ?? '27017',
			app: process.env.MONGO_APP ?? 'tech_task',
		},
	};

	const connection = `${config.database.url}:${config.database.port}/${config.database.app}`;

	await connect(connection);

	const app = new Application(config.server.port);

	app.attachRouter(UserRouter);

	await app.start();
};

main().then(() => {
	console.log('Started!');
}).catch((e: Error) => {
	console.log(e.stack);
});
