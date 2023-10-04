import { Request, Response } from "express";
import { IUserRepository } from "../../interfaces/IUserRepository";
import { ChangePasswordService } from "../../services/ChangePasswordService";
import { IHashRepository } from "../../interfaces/IHashRepository";

export class ChangePasswordController {
    constructor(private userRepo: IUserRepository, private hashRepo: IHashRepository) { }

    async handle(req: Request, res: Response): Promise<Response> {
        const { oldPassword, newPassword } = req.body;
        const { id } = req.params;

        const changePasswordService = new ChangePasswordService(this.userRepo, this.hashRepo);
        await changePasswordService.execute({id, oldPassword, newPassword});
        
        return res.status(201).send()
    }
}