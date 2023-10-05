import { IDiagnostics } from "../interfaces/IDiagnostics";
import { IDiagnosticsRepository } from "../interfaces/IDiagnosticsRepository";

export class CreateDiagnosticsService {
    constructor(
        private diagnosticRepo: IDiagnosticsRepository
    ) {}

    async execute(input: IDiagnostics): Promise<void> {
        await this.diagnosticRepo.insert(input);
    }
}