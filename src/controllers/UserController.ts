import type {Request, Response, NextFunction} from 'express';
import type {UserService} from '../services/UserService';
import {default as userService} from '../services/UserService';
import {Controller} from '../types/Controller';
import type {IRequestUser} from '../types/IUser';

class UserController extends Controller {
	private readonly _userService: UserService;

	constructor(service: UserService) {
		super();
		this._userService = service;
	}

	find = async (request: Request, responce: Response, next: NextFunction) => {
		try {
			const users = await this._userService.find();
		} catch (e) {
			responce.status(501).send('Not implimented');
		}
	};

	create = async (request: Request, responce: Response, next: NextFunction) => {
		const user: IRequestUser = request.body;

		console.log('incoming user', user.firstName);
		
		const created = await this._userService.create(user);

		responce.status(200).send(created);
	};

	delete = async (request: Request, responce: Response, next: NextFunction) => {
		responce.status(501).send('Not implimented');
	};
}

export default new UserController(userService);
