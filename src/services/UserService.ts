import type {UserRepository} from '../repositories/UserRepository';
import {default as userRepository} from '../repositories/UserRepository';
import {Service} from '../types/Service';
import type {IBaseUser} from '../types/IUser';

export class UserService extends Service {
	private readonly _userRepository: UserRepository;

	constructor(repository: UserRepository) {
		super();
		this._userRepository = repository;
	}

	find = async (): Promise<IBaseUser[]> => this._userRepository.find();

	findOne = async (): Promise<boolean> => {
		throw new Error('Method not implemented.');
	};

	create = async (firstName: IBaseUser['firstName']): Promise<boolean> => this._userRepository.save({firstName});

	delete = async (firstName: IBaseUser['firstName']): Promise<boolean> => this._userRepository.delete(firstName);
}

export default new UserService(userRepository);
