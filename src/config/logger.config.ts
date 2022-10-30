import winston from 'winston';

export const loggerConfig = {
	morgan: {
		format: ':date[web] :method :url :status',
	},
	winston: {
		err: {
			level: 'error',
			filename: `${process.cwd()}/logs/errors.log`,
			handleExceptions: true,
			format: winston.format.combine(
				winston.format.timestamp(),
				winston.format.json(),
			),
		},
		general: {
			level: 'info',
			filename: `${process.cwd()}/logs/info.log`,
			format: winston.format.combine(
				winston.format.timestamp(),
				winston.format.json(),
			),
		},
		console: {
			level: 'debug',
			handleExceptions: true,
			format: winston.format.combine(
				winston.format.timestamp(),
				winston.format.simple(),
			),
		},
	},
};
