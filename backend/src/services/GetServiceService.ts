import { IService } from "../interfaces/IService";
import { IServiceRepository } from "../interfaces/IServiceRepository";

export class GetServiceService {
    constructor(private serviceRepo: IServiceRepository) { }

    async execute(code: string): Promise<IService> {
        return await this.serviceRepo.read(code);
    }
}