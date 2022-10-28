import { IBaseUser } from "./IUser";

export interface IService {
    find() : Promise<IBaseUser[]>;
    findOne() : Promise<boolean>;
    create(object : IBaseUser['firstName']) : Promise<boolean>;
    delete() : Promise<boolean>;
}

export abstract class Service implements IService {
    abstract find(): Promise<IBaseUser[]>;
    abstract findOne(): Promise<boolean>;
    abstract create(object : IBaseUser['firstName']): Promise<boolean>;
    abstract delete(): Promise<boolean>;   
}