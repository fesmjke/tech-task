import type {Request, Response, NextFunction} from 'express';
import {errorLogger} from '../logger/logger';

export const notFound = (request: Request, responce: Response, next: NextFunction) => {
	if(responce.headersSent){
		next();
		return;
	}
	responce.status(404);

	responce.send({error: `Cannot ${request.method} ${request.path}`});
	errorLogger.error(`Cannot ${request.method} ${request.path}`);

	next();
};
