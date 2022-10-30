import type {Request, Response, NextFunction} from 'express';
import {ValidationError} from 'joi';
import type {UserService} from '../services/UserService';
import {default as userService} from '../services/UserService';
import {Controller} from '../types/Controller';
import type {IRequestUser} from '../types/IUser';
import {userRequestSchema} from '../validation/user.validation';

class UserController extends Controller {
	private readonly _userService: UserService;

	constructor(service: UserService) {
		super();
		this._userService = service;
	}

	find = async (_request: Request, responce: Response, _next: NextFunction) => {
		try {
			const users = await this._userService.find();
			responce.status(200).send(users);
		} catch (e: any) {
			responce.status(404).send({error: e.message});
		}
	};

	findById = async (request: Request, responce: Response, _next: NextFunction) => {
		const {id} = request.params;

		try {
			const user = await this._userService.findOne(id);
			responce.status(200).send(user);
		} catch (e: any) {
			responce.status(404).send({error: e.message});
		}
	};

	create = async (request: Request, responce: Response, next: NextFunction) => {
		const user: IRequestUser = request.body;

		try {
			await userRequestSchema.validateAsync(user);
		} catch (e: any) {
			if (e instanceof ValidationError) {
				const [message] = e.details;
				responce.status(400).send({error: message.message});
				next();
				return;
			}
		}

		try {
			const created = await this._userService.create(user);
			responce.status(200).send(created);
		} catch (e: any) {
			responce.status(400).send({error: e.message});
		}
	};

	delete = async (request: Request, responce: Response, _next: NextFunction) => {
		const {id} = request.params;

		try {
			await this._userService.delete(id);
			responce.status(200).send(`Successfully deleted user with id ${id}`);
		} catch (e: any) {
			responce.status(400).send({error: e.message});
		}
	};
}

export default new UserController(userService);
