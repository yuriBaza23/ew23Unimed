import { AppError } from "../errors/AppError";
import { IAdminRepository } from "../interfaces/IAdminRepository";
import { IAuthenticateRequest, IAuthenticateResponse } from "../interfaces/IAuthenticate";
import { IHashRepository } from "../interfaces/IHashRepository";
import { IJWTRepository } from "../interfaces/IJWTRepository";

export class AuthenticateService {
    constructor(
        private adminRepo: IAdminRepository,
        private hashRepo: IHashRepository,
        private JwtRepo: IJWTRepository
    ) { }

    async execute({name, password}: IAuthenticateRequest): Promise<IAuthenticateResponse> {
        let admin = await this.adminRepo.get(name);

        if(await this.hashRepo.uncryptographie(password, admin.password)) {
            let token = this.JwtRepo.generate({name})
            return {
                admin: {
                    ...admin,
                    password: ''
                },
                token
            }
        }
        throw new AppError("Admin not found");
    }
}