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
        let {id} = req.params;

        let creaeteService = new CreateServiceService(this.serviceRepo, this.clientRepo);
        let result = await creaeteService.execute(service, id);

        return res.status(201).json(result);
    }
}