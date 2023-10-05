import { Request, Response } from "express";
import { IIllnessRepository } from "../../interfaces/IIllnessRepository";
import { GetAllIllnessService } from "../../services/GetAllIllnessService";

export class GetAllIllnessController {
    constructor(private illnessRepo: IIllnessRepository) { }

    async handle(req: Request, res: Response): Promise<Response> {
        let getAllIllness = new GetAllIllnessService(this.illnessRepo);
        let result = await getAllIllness.execute();

        return res.status(200).json(result)
    }
}