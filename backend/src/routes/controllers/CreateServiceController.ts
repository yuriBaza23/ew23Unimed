import { Request, Response } from "express";
import { IServiceRepository } from "../../interfaces/IServiceRepository";
import { CreateServiceService } from "../../services/CreateServiceService";

export class CreateServiceController {
    constructor(private serviceRepo: IServiceRepository) { }

    async handle(req: Request, res: Response): Promise<Response> {
        let service = req.body;

        let createServiceService = new CreateServiceService(this.serviceRepo);
        let result = await createServiceService.execute(service);

        return res.status(201).json(result)
    }
}