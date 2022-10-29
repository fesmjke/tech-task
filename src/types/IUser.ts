export interface IUser {
	_id: string;
	firstName: string;
	lastName: string;
	name: string;
	email: string;
	homePhone: string;
	interests: string[];
	isArchived?: boolean;
	isBuyer?: boolean;
	isSeller?: boolean;
	isSpam?: boolean;
}

export interface IRequestUser {
	firstName: string;
	lastName: string;
	email?: string;
	homePhone?: string;
	interests: string[];
}
