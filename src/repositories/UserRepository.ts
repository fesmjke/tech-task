import {default as UserModel} from '../models/user.model';
import type {IRequestUser, IUser} from '../types/IUser';
import {Repository} from '../types/Repository';

export class UserRepository extends Repository<IRequestUser, IUser> {
	private readonly UserModel = UserModel;

	save = async (user: IRequestUser): Promise<IUser> => this.UserModel.create(user);

	delete async (id: string): Promise<boolean> {
		throw new Error('Method not implemented.');
	}

	async find(): Promise<IUser[]> {
		throw new Error('Method not implemented.');
	}
}

export default new UserRepository();
