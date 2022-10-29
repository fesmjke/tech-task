import Database from '../models/db/database';
import type {IBaseUser} from '../types/IUser';
import {Repository} from '../types/Repository';

export class UserRepository extends Repository<IBaseUser> {
	private readonly _db = Database;

	save = async (user: IBaseUser): Promise<boolean> => this._db.create(user);

	find = async (): Promise<IBaseUser[]> => this._db.find();

	delete = async (user: IBaseUser['firstName']): Promise<boolean> => this._db.delete(user);
}

export default new UserRepository();
