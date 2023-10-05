import { IDiagnostics } from "../interfaces/IDiagnostics";
import { IDiagnosticsRepository } from "../interfaces/IDiagnosticsRepository";

export class GetDiagnosticsService {
    constructor(private diagnosticsRepo: IDiagnosticsRepository) { }

    async execute(): Promise<IDiagnostics[]> {
        return await this.diagnosticsRepo.getAll();
    }
}