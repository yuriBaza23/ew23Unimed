import { Request, Response } from "express";
import { GetDiagnosticsService } from "../../services/GetDiagnosticsService";
import { IDiagnosticsRepository } from "../../interfaces/IDiagnosticsRepository";
import { IClientRepository } from "../../interfaces/IClientRepository";
import { IIllnessRepository } from "../../interfaces/IIllnessRepository";

export class GetDiagnosticsController {
    constructor(
        private diagnosticsRepo: IDiagnosticsRepository,
        private patientRepo: IClientRepository,
        private illRepo: IIllnessRepository) { }

    async handle(_: Request, res: Response): Promise<Response> {
        let getDiagnostics = new GetDiagnosticsService(this.diagnosticsRepo, this.patientRepo, this.illRepo);
        let result = await getDiagnostics.execute();
        console.log(result)

        return res.status(200).json(result);
    }
}