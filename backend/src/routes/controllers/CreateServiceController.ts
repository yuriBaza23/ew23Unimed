import { Request, Response } from "express";
import { IServiceRepository } from "../../interfaces/IServiceRepository";
import { CreateServiceService } from "../../services/CreateServiceService";
import { IClientRepository } from "../../interfaces/IClientRepository";

export class CreateServiceController {
    constructor(
        private serviceRepo: IServiceRepository,
        private clientRepo: IClientRepository
    ) { }

    async handle(req: Request, res: Response): Promise<Response> {
        let service = req.body;
        let { id } = req.params;

        let createServiceService = new CreateServiceService(this.serviceRepo, this.clientRepo);
        let result = await createServiceService.execute(service, id);

        return res.status(201).json(result)
    }
}