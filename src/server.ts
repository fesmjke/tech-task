import {connect} from 'mongoose';
import {loadDbConfigAsync} from './config/db.config';
import {loadServerConfigAsync} from './config/server.config';
import {dbConnection} from "./utils/connection";
import {createServer} from "./utils/server";

const main = async () => {
	const serverConfig = await loadServerConfigAsync();
	const dbConfig = await loadDbConfigAsync();

	try {
		await connect(dbConnection(dbConfig.database));
	} catch (e) {
		console.log(e);
	}

	const server = createServer(serverConfig.server.port);

	await server.start();
};

main().then(() => {
	console.log('Started!');
}).catch((e: Error) => {
	console.log(e.stack);
});
