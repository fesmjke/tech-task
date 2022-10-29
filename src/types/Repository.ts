interface IWrite<T> {
	save(object: T): Promise<boolean>;
	delete(id: string): Promise<boolean>;
}

interface IRead<T> {
	find(): Promise<T[]>;
}

export abstract class Repository<T> implements IWrite<T>, IRead<T> {
	abstract save(object: T): Promise<boolean>;
	abstract delete(id: string): Promise<boolean>;
	abstract find(): Promise<T[]>;
}
