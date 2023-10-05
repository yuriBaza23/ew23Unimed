import { Request, Response } from "express";
import { GetDiagnosticsService } from "../../services/GetDiagnosticsService";
import { IDiagnosticsRepository } from "../../interfaces/IDiagnosticsRepository";

export class GetDiagnosticsController {
    constructor(private diagnosticsRepo: IDiagnosticsRepository) { }

    async handle(_: Request, res: Response): Promise<Response> {
        let getDiagnostics = new GetDiagnosticsService(this.diagnosticsRepo);
        let result = await getDiagnostics.execute();

        return res.status(200).json(result);
    }
}