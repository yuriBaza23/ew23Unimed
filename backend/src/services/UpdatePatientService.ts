import { Patient } from "../entities/Patient";
import { IClient } from "../interfaces/IClient";
import { IClientRepository } from "../interfaces/IClientRepository";
import { IDiagnosticsRepository } from "../interfaces/IDiagnosticsRepository";
import { IIllnessRepository } from "../interfaces/IIllnessRepository";

export class UpdatePatientService {
    constructor(
        private patientRepo: IClientRepository,
        private illRepo: IIllnessRepository,
        private diagnosticsRepo: IDiagnosticsRepository
    ) { }

    async execute(input: IClient): Promise<IClient> {
        let patient = Patient.create(input);
        await this.patientRepo.update(patient.toJSON());

        let perfil = Patient.create(await this.patientRepo.read(input.id!)).perfil();
        let ills = await this.illRepo.readAll();
        let sum = 0; let max = 0; let id = "";

        for(let i = 0; i < ills.length; i++) {
            for(let j = 0; j < ills[i].atributes.length; j++) {
                sum += ills[i].metrics[j][perfil[ills[i].atributes[j]]];
            }
            if(sum >= max) {
                max = sum;
                id = ills[i].id;
            }
        }
    
        return patient.toJSON();
    }
}