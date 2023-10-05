import { Request, Response } from "express";
import { IClientRepository } from "../../interfaces/IClientRepository";
import { UpdatePatientService } from "../../services/UpdatePatientService";
import { IIllnessRepository } from "../../interfaces/IIllnessRepository";
import { IDiagnosticsRepository } from "../../interfaces/IDiagnosticsRepository";

export class UpdatePatientController {
    constructor(
        private patientRepo: IClientRepository,
        private illRepo: IIllnessRepository,
        private diagnosticsRepo: IDiagnosticsRepository
    ) { }

    async handle(req: Request, res: Response): Promise<Response> {
        let user = req.body;

        let updatePatient = new UpdatePatientService(this.patientRepo, this.illRepo, this.diagnosticsRepo);
        let resul = await updatePatient.execute(user);
 
        return res.status(200).json(resul)
    }
}