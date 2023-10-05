import { IClient } from "../interfaces/IClient";
import { IClientRepository } from "../interfaces/IClientRepository";

export class UpdatePatientService {
    constructor(private patientRepo: IClientRepository) { }

    async execute(input: IClient): Promise<IClient> {
        await this.patientRepo.update(input);
        return input;
    }
}