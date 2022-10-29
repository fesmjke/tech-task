import type {IRequestUser, IUser} from './IUser';

export interface IService {
	find(): Promise<IUser[]>;
	findOne(): Promise<IUser>;
	create(object: IRequestUser): Promise<IUser>;
	delete(id: string): Promise<boolean>;
}

export abstract class Service implements IService {
	abstract find(): Promise<IUser[]>;
	abstract findOne(): Promise<IUser>;
	abstract create(object: IRequestUser): Promise<IUser>;
	abstract delete(id: string): Promise<boolean>;
}
