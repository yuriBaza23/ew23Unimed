import { AppError } from "../errors/AppError";
import { IUpdateAdminRequest, IUpdateAdminResponse } from "../interfaces/IAdmin";
import { IAdminRepository } from "../interfaces/IAdminRepository";
import { IHashRepository } from "../interfaces/IHashRepository";

export class UpdateAdminService {
    constructor(
        private adminRepo: IAdminRepository,
        private hashRepo: IHashRepository
    ) { }

    async execute(admin: IUpdateAdminRequest): Promise<IUpdateAdminResponse> {
        if(admin.password != admin.confirmPassword) throw new AppError("Senhas Incompativeis");

        let adminComp = await this.adminRepo.get(admin.name);

        if(await this.hashRepo.uncryptographie(admin.oldPassword, adminComp.password)) {

            await this.adminRepo.update({
                name: admin.name,
                password: await this.hashRepo.cryptographie(admin.password)
            });
            return admin;
        }
        throw new AppError("Senha Incompativel");
    }
}