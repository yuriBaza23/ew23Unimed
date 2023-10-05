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

        if(await this.hashRepo.uncryptographie(admin.password, adminComp.password)) {
            let result = {
                name: admin.name,
                password: await this.hashRepo.cryptographie(admin.password)
            }
            await this.adminRepo.update(result);
            return result;
        }
        throw new AppError("Senha Incompativel");
    }
}