import { Request, Response } from "express";
import { IAdminRepository } from "../../interfaces/IAdminRepository";
import { IHashRepository } from "../../interfaces/IHashRepository";
import { UpdateAdminService } from "../../services/UpdateAdminService";

export class UpdateAdminController {
    constructor(
        private adminRepo: IAdminRepository,
        private hashRepo: IHashRepository
    ) { }

    async handle(req: Request, res: Response): Promise<Response> {
        let {name, password, confirmPassword, oldPassword} = req.body;

        let updateAdminService = new UpdateAdminService(this.adminRepo, this.hashRepo);
        let result = await updateAdminService.execute({name, password, confirmPassword, oldPassword});

        return res.status(200).json(result)
    }
}