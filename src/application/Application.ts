import express from 'express';
import type {Application as ExpressApplication, Router, Handler} from 'express';
import {infoLogger, morganLogger} from '../logger/logger';
import bodyParser from 'body-parser';

export class Application {
	private readonly express: ExpressApplication;
	private readonly port: string;

	constructor(port: string) {
		this.express = express();
		this.express.use(bodyParser.json());
		this.express.use(morganLogger);
		this.port = port;
	}

	attachRouter(router: Router) {
		this.express.use('/api', router);
	}

	attachMiddleware(fn: Handler) {
		this.express.use(fn);
	}

	async start() {
		this.express.listen(this.port, () => {
			infoLogger.info(`[server]: Server is running at https://localhost:${this.port}`);
		});
	}

	getApp() {
		return this.express;
	}
}
