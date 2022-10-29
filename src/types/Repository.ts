interface IWrite<I, T> {
	save(object: I): Promise<T>;
	delete(id: string): Promise<boolean>;
}

interface IRead<T> {
	find(): Promise<T[]>;
}

export abstract class Repository<I, T> implements IWrite<I, T>, IRead<T> {
	abstract save(object: I): Promise<T>;
	abstract delete(id: string): Promise<boolean>;
	abstract find(): Promise<T[]>;
}
