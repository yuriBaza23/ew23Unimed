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
        let admin = req.body;

        let createAdmin = new CreateAdminService(this.adminRepo, this.hashRepo);
        let result = createAdmin.execute(admin);

        return res.status(200).json(result)
    }
}