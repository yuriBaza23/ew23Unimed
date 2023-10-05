import { Request, Response } from "express";
import { IIllnessRepository } from "../../interfaces/IIllnessRepository";
import { CreateIllnessService } from "../../services/CreateIllnessService";

export class CreateIllnessController {
    constructor(private illnessRepo: IIllnessRepository) { }

    async handle(req: Request, res: Response): Promise<Response> {
        let illness = req.body;

        let createIllness = new CreateIllnessService(this.illnessRepo);
        let result = await createIllness.execute(illness);

        return res.status(201).json(result);
    }
}