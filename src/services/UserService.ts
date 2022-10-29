import type {UserRepository} from '../repositories/UserRepository';
import {default as userRepository} from '../repositories/UserRepository';
import {Service} from '../types/Service';
import type {IRequestUser, IUser} from '../types/IUser';

export class UserService extends Service {
	private readonly _userRepository: UserRepository;

	constructor(repository: UserRepository) {
		super();
		this._userRepository = repository;
	}

	find = async (): Promise<IUser[]> => this._userRepository.find();

	findOne = async (): Promise<IUser> => {
		throw new Error('Method not implemented.');
	};

	create = async (user: IRequestUser): Promise<IUser> => this._userRepository.save(user);

	delete = async (id: string): Promise<boolean> => this._userRepository.delete(id);
}

export default new UserService(userRepository);
