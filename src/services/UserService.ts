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

	findOne = async (id: string): Promise<IUser> => this._userRepository.findOne(id);

	create = async (user: IRequestUser): Promise<IUser> => {
		const {email, homePhone} = user;

		if (email) {
			const emailSearch = await this._userRepository.findByEmail(email);

			if (emailSearch) {
				throw new Error(`Cannot create new user, because user with email ${email} already exists!`);
			}
		}

		if (homePhone) {
			const phoneSearch = await this._userRepository.findByPhone(homePhone);

			if (phoneSearch) {
				throw new Error(`Cannot create new user, because user with phone ${homePhone} already exists!`);
			}
		}

		return this._userRepository.save(user);
	};

	delete = async (id: string): Promise<boolean> => {
		try {
			await this.findOne(id);
		} catch (e) {
			throw e;
		}

		return this._userRepository.delete(id);
	};
}

export default new UserService(userRepository);
