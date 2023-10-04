import { IClientRepository } from "../interfaces/IClientRepository";
import { IService } from "../interfaces/IService";
import { IServiceRepository } from "../interfaces/IServiceRepository";

export class CreateServiceService {
    constructor(
        private serviceRepo: IServiceRepository,
        private clientRepo: IClientRepository
    ) { }

    async execute(service: IService, id: string): Promise<IService> {
        await this.serviceRepo.insert(service);
        await this.clientRepo.insertService(id, service.id);
        
        return service;
    }
}