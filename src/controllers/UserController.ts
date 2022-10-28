import type { Request, Response, NextFunction } from "express";
import type { UserService } from "../services/UserService";
import {default as userService} from "../services/UserService";
import { Controller } from "../types/Controller";

class UserController extends Controller {
    private readonly _userService : UserService;
    
    constructor(service : UserService){
        super();
        this._userService = service;
    }

    find = async (request : Request, responce : Response, next: NextFunction) => {        
        const users = await this._userService.find();

        responce.status(200).send(users);
    }

    create = async (request : Request, responce : Response, next: NextFunction) => {
        responce.status(501).send("not implemented : create");
    }

    delete = async (request : Request, responce : Response, next: NextFunction) => {
        responce.status(501).send("not implemented : delete");
    }
}

export default new UserController(userService);