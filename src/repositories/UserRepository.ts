import Database from "../models/db/database";
import { IBaseUser } from "../types/IUser";
import { Repository } from "../types/Repository";

export class UserRepository extends Repository<IBaseUser> {
    private readonly _db = Database;
    
    save = async (user: IBaseUser): Promise<boolean> => {
        return new Promise<boolean>(async () => {
            return await this._db.create(user);
        })
    }

    find = async (): Promise<IBaseUser[]> => {
        return this._db.find();
    }

    delete = async (id: string): Promise<boolean> => {
        throw new Error("Method not implemented.");
    }
}

export default new UserRepository();
