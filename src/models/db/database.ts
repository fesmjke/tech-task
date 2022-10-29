import type {IBaseUser} from '../../types/IUser';

export type IDataBaseState = {
	users: IBaseUser[];
};

export class Database {
	private readonly state: IDataBaseState = {
		users: [
			{
				firstName: 'Example 1',
			},
			{
				firstName: 'Example 2',
			},
			{
				firstName: 'Example 3',
			},
		],
	};

	delete = async (firstName: string) => {
		const index = this.state.users.findIndex(user => user.firstName === firstName);

		if (index !== -1) {
			this.state.users.splice(index, 1);

			return true;
		}

		return false;
	};

	find = async () => this.state.users;

	create = async (user: Omit<IBaseUser, ''>) => {
		console.log(`New user created! Welcome, ${user.firstName}!`);

		this.state.users.push({
			...user,
		});

		return true;
	};
}

export default new Database();
