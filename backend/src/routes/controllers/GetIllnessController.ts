import { Request, Response } from "express";
import { IIllnessRepository } from "../../interfaces/IIllnessRepository";
import { GetIllnessService } from "../../services/GetIllnessService";

export class GetIllnessController {
    constructor(private illnessRepo: IIllnessRepository) { }

    async handle(req: Request, res: Response): Promise<Response> {
        let { id } = req.params;

        let getIllness = new GetIllnessService(this.illnessRepo);
        let result = getIllness.execute(id);

        return res.status(200).json(result);
    }
}