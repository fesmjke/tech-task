import type { UserRepository } from "../repositories/UserRepository";
import {default as userRepository} from "../repositories/UserRepository";
import { Service } from "../types/Service";
import { IBaseUser } from "../types/IUser";

export class UserService extends Service {
    private readonly _userRepository : UserRepository;
    
    constructor(repository: UserRepository) {
        super();
        this._userRepository = repository;
    }

    find = () : Promise<IBaseUser[]> => {
        return this._userRepository.find();
    }

    findOne = () : Promise<boolean> => {
        throw new Error("Method not implemented.");
    }

    create = (firstName : IBaseUser['firstName']) : Promise<boolean> => {
        return this._userRepository.save({firstName});
    }
    
    delete = () : Promise<boolean> => {
        throw new Error("Method not implemented.");
    }
}

export default new UserService(userRepository);