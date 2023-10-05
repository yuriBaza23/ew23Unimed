import { Request, Response } from "express";
import { IServiceRepository } from "../../interfaces/IServiceRepository";
import { GetServiceService } from "../../services/GetServiceService";

export class GetServiceController {
    constructor(private serviceRepo: IServiceRepository) { }

    async handle(req: Request, res: Response): Promise<Response> {
        let getService = new GetServiceService(this.serviceRepo);

        let result = await getService.execute();

        return res.status(200).json(result)
    }
}