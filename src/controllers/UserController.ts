import type {Request, Response, NextFunction} from 'express';
import type {UserService} from '../services/UserService';
import {default as userService} from '../services/UserService';
import {Controller} from '../types/Controller';

class UserController extends Controller {
	private readonly _userService: UserService;

	constructor(service: UserService) {
		super();
		this._userService = service;
	}

	find = async (request: Request, responce: Response, next: NextFunction) => {
		const users = await this._userService.find();

		responce.status(200).send(users);
	};

	create = async (request: Request, responce: Response, next: NextFunction) => {
		const {firstName} = request.body;

		if (firstName === undefined) {
			responce.status(500).send('Missing property in body : firstName');
			next();
			return;
		}

		try {
			const result = await this._userService.create(firstName);
			responce.status(200).send(result);
		} catch (e: unknown) {
			responce.status(500).send('');
		}
	};

	delete = async (request: Request, responce: Response, next: NextFunction) => {
		const {id} = request.params;

		const result = await this._userService.delete(id);

		responce.status(200).send(result);
	};
}

export default new UserController(userService);
