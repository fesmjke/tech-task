export interface IBaseUser {
	firstName: string;
}

export interface IUser {
	firstName: string;
	lastName?: string;
	email?: string;
	homePhone?: string;
	interests?: string[];
	isArchived?: boolean;
	isBuyer?: boolean;
	isSeller?: boolean;
	isSpam?: boolean;
}
