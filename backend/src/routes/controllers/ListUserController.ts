import { Request, Response } from "express";
import { IUserRepository } from "../../interfaces/IUserRepository";
import { ListUsersService } from "../../services/ListUserService";

export class ListUsersController {
    constructor(private userRepo: IUserRepository) { }
    async handle(_: Request, res: Response): Promise<Response> {
        const listUsersService = new ListUsersService(this.userRepo)
        const users = await listUsersService.execute()

        return res.json(users)
    }
}

