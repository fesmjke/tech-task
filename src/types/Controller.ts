import type {Request, Response, NextFunction} from 'express';

export interface IController {
	find(request: Request, responce: Response, next: NextFunction): Promise<void>;
	create(request: Request, responce: Response, next: NextFunction): Promise<void>;
	delete(request: Request, responce: Response, next: NextFunction): Promise<void>;
}

export abstract class Controller implements IController {
	abstract find(request: Request, responce: Response, next: NextFunction): Promise<void>;
	abstract create(request: Request, responce: Response, next: NextFunction): Promise<void>;
	abstract delete(request: Request, responce: Response, next: NextFunction): Promise<void>;
}
