import { Admin } from "../entities/Admin";
import { AppError } from "../errors/AppError";
import { ICreateAdminRequest, ICreateAdminResponse } from "../interfaces/IAdmin";
import { IAdminRepository } from "../interfaces/IAdminRepository";
import { IHashRepository } from "../interfaces/IHashRepository";

export class CreateAdminService {
    constructor(
        private adminRepo: IAdminRepository,
        private hashRepo: IHashRepository
    ) { }

    async execute({name, password, confirmPassword}: ICreateAdminRequest): Promise<ICreateAdminResponse> {
        if(password != confirmPassword) throw new AppError('Senhas incompativeis');

        const admin = Admin.create(name, await this.hashRepo.cryptographie(password))
        let result = admin.toJSON();

        this.adminRepo.insert(result);
        return result
    }
}