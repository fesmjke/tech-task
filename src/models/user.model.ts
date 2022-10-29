import type {Schema, Model} from 'mongoose';
import {model} from 'mongoose';
import type {IUser, IRequestUser} from '../types/IUser';
import {default as UserSchema} from './schemas/user.schema';

class UserModel {
	private readonly User: Model<IUser>;

	constructor(userSchema: Schema) {
		this.User = model<IUser>('User', userSchema);
	}

	create = async (user: IRequestUser) => {
		console.log('USER MODEL', user);
		return this.User.create(user);
	};

	find = async () => {
		throw new Error('Not implemented');
	};

	delete = async () => {
		throw new Error('Not implemented');
	};
}

export default new UserModel(UserSchema);
