import {default as UserModel} from '../models/user.model';
import type {IRequestUser, IUser} from '../types/IUser';
import {Repository} from '../types/Repository';

export class UserRepository extends Repository<IRequestUser, IUser> {
	private readonly UserModel = UserModel;

	save = async (user: IRequestUser): Promise<IUser> => this.UserModel.create(user);

	delete = async (id: string): Promise<boolean> => this.UserModel.delete(id);

	find = async (): Promise<IUser[]> => this.UserModel.find();

	findOne = async (id: string): Promise<IUser> => this.UserModel.findOne(id);

	findByEmail = async (email: string): Promise<IUser | null> => this.UserModel.findByEmail(email);

	findByPhone = async (phone: string): Promise<IUser | null> => this.UserModel.findByPhone(phone);
}

export default new UserRepository();
