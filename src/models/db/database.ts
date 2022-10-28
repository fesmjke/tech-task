import type { IBaseUser } from "../../types/IUser";

export interface IDataBaseState{
    users : IBaseUser[]
}

export class Database {
    private state : IDataBaseState = {
        users : [
            {
                firstName : "Example 1"
            },
            {
                firstName : "Example 2"
            },
            {
                firstName : "Example 3"
            }
        ]
    }

    find = async () => {
        return this.state.users;
    }

    create = async (user : Omit<IBaseUser, ''>) => {
        console.log(`New user created! Welcome, ${user.firstName}!`);
        
        this.state.users.push({
            ...user
        })

        return true;
    }
}

export default new Database();