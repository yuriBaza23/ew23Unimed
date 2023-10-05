import { Request, Response } from "express";
import { IClientRepository } from "../../interfaces/IClientRepository";
import { CreatePatientService } from "../../services/CreatePatientService";

export class CreatePatientController {
    constructor(private patientRepo: IClientRepository) { }

    async handle(req: Request, res: Response): Promise<Response> {
        let user = req.body;

        let updatePatient = new CreatePatientService(this.patientRepo);
        let resul = await updatePatient.execute(user);

        return res.status(201).json(resul)
    }
}