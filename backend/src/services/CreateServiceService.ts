import { IService } from "../interfaces/IService";
import { IServiceRepository } from "../interfaces/IServiceRepository";

export class CreateServiceService {
    constructor(private serviceRepo: IServiceRepository) { }

    async execute(service: IService): Promise<IService> {
        await this.serviceRepo.insert(service);
        return service
    }
}