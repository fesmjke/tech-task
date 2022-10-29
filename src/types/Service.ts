import type {IRequestUser, IUser} from './IUser';

export interface IService {
	find(): Promise<IUser[]>;
	findOne(id: string): Promise<IUser>;
	create(object: IRequestUser): Promise<IUser>;
	delete(id: string): Promise<boolean>;
}

export abstract class Service implements IService {
	abstract find(): Promise<IUser[]>;
	abstract findOne(id: string): Promise<IUser>;
	abstract create(object: IRequestUser): Promise<IUser>;
	abstract delete(id: string): Promise<boolean>;
}
