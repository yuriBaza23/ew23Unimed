import { Request, Response } from "express";
import { IAdminRepository } from "../../interfaces/IAdminRepository";
import { AuthenticateService } from "../../services/AuthenticateService";
import { IHashRepository } from "../../interfaces/IHashRepository";
import { IJWTRepository } from "../../interfaces/IJWTRepository";

export class AuthenticateController {
    constructor(
        private adminRepo: IAdminRepository,
        private hashRepo: IHashRepository,
        private jwtRepo: IJWTRepository
    ) { }

    async handle(req: Request, res: Response): Promise<Response> {
        let { name, password } = req.body;

        let authService = new AuthenticateService(this.adminRepo, this.hashRepo, this.jwtRepo);
        let result =  await authService.execute({name, password});

        return res.status(200).json(result);
    }
}