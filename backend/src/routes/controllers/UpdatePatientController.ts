import { Request, Response } from "express";
import { IClientRepository } from "../../interfaces/IClientRepository";
import { UpdatePatientService } from "../../services/UpdatePatientService";

export class UpdatePatientController {
    constructor(private patientRepo: IClientRepository) { }

    async handle(req: Request, res: Response): Promise<Response> {
        let user = req.body;

        let updatePatient = new UpdatePatientService(this.patientRepo);
        let resul = await updatePatient.execute(user);

        return res.status(200).json(resul)
    }
}