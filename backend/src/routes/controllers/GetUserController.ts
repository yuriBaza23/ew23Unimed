import { Request, Response } from "express";
import { IUserRepository } from "../../interfaces/IUserRepository";
import { GetUserService } from "../../services/GetUserService";

export class GetUserController{
    constructor(private userRepo: IUserRepository){}
    async handle(req: Request, res: Response): Promise<Response>{
        const { id } = req.params;

    const getUserService = new GetUserService(this.userRepo)
    const result = await getUserService.execute({ id })
    return res.json(result)
    }
}

