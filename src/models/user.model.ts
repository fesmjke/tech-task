import type {Schema, Model} from 'mongoose';
import {model} from 'mongoose';
import type {IUser, IRequestUser} from '../types/IUser';
import {default as UserSchema} from './schemas/user.schema';

class UserModel {
	private readonly User: Model<IUser>;

	constructor(userSchema: Schema) {
		this.User = model<IUser>('User', userSchema);
	}

	create = async (user: IRequestUser) => this.User.create(user);

	findOne = async (id: string) => {
		const result = await this.User.findOne({_id: id});

		if (result === null) {
			throw new Error(`Cannot find user with id - ${id}`);
		} else {
			return result;
		}
	};

	find = async () => this.User.find();

	findByEmail = async (email: string) => this.User.findOne({email});

	findByPhone = async (phone: string) => this.User.findOne({homePhone: phone});

	delete = async (id: string) => {
		const result = await this.User.deleteOne({_id: id});

		return result.deletedCount > 0;
	};
}

export default new UserModel(UserSchema);
