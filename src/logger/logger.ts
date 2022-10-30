import {loggerConfig} from '../config/logger.config';
import * as winston from 'winston';
import morgan from 'morgan';

export const errorLogger = winston.createLogger({
	transports: [
		new winston.transports.Console(loggerConfig.winston.console),
		new winston.transports.File(loggerConfig.winston.err),
	],
	exitOnError: false,
});

export const infoLogger = winston.createLogger({
	transports: [
		new winston.transports.File(loggerConfig.winston.general),
	],
	exitOnError: false,
});

export const morganLogger = morgan(loggerConfig.morgan.format);
