import { Request, Response } from "express";
import { IAdminRepository } from "../../interfaces/IAdminRepository";
import { IHashRepository } from "../../interfaces/IHashRepository";
import { CreateAdminService } from "../../services/CreateAdminService";

export class CreateAdminController {
    constructor(
        private adminRepo: IAdminRepository,
        private hashRepo: IHashRepository
    ) { }

    async handle(req: Request, res: Response): Promise<Response> {
        let { name, password, confirmPassword } = req.body;

        let createAdmin = new CreateAdminService(this.adminRepo, this.hashRepo);
        let result = await createAdmin.execute({name, password, confirmPassword});

        return res.status(201).json(result)
    }
}