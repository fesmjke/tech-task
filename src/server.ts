import {connect} from 'mongoose';
import {loadDbConfigAsync} from './config/db.config';
import {loadServerConfigAsync} from './config/server.config';
import { errorLogger, infoLogger } from './logger/logger';
import {dbConnection} from './utils/connection';
import {createServer} from './utils/server';

const main = async () => {
	const serverConfig = await loadServerConfigAsync();
	const dbConfig = await loadDbConfigAsync();
	const connection = dbConnection(dbConfig.database)
	try {
		await connect(connection);
		infoLogger.info(`Database started at ${connection}`);
	} catch (e:any) {
		errorLogger.error(e.message);
	}

	const server = createServer(serverConfig.server.port);

	await server.start();
};

main().then(() => {
	infoLogger.info('Server started!');
}).catch((e: Error) => {
	errorLogger.error(e.message);
});
