import { Request, Response } from "express"
import { IUserRepository } from "../../interfaces/IUserRepository";
import { AuthenticateUserService } from "../../services/AuthenticateUserService";
import { IJWTRepository } from "../../interfaces/IJWTRepository";
import { IHashRepository } from "../../interfaces/IHashRepository";

export class AuthenticateUserController {
    constructor(
        private userRepo: IUserRepository, 
        private jwtRepo: IJWTRepository,
        private hashRepo: IHashRepository
    ) {};

    async handle(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;
        
        const authenticateUserService = new AuthenticateUserService(this.userRepo, this.jwtRepo, this.hashRepo);
        const result = await authenticateUserService.execute({email, password});

        return res.status(201).json(result).send()
    }
}