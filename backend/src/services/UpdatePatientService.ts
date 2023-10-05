import { Patient } from "../entities/Patient";
import { IClient } from "../interfaces/IClient";
import { IClientRepository } from "../interfaces/IClientRepository";
import { IDiagnosticsRepository } from "../interfaces/IDiagnosticsRepository";
import { IIllnessRepository } from "../interfaces/IIllnessRepository";
import { getUserKeys } from "../utils/getKeys";

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
        let sumArray = [];
        
        for(let illIndex = 0; illIndex < ills.length; illIndex++) {
            if(ills[illIndex].name === 'Neoplasias') {
                let sum = 0;
                if(perfil.smokingFrequence === 'Nunca') {
                    sum += ills[illIndex].metrics[0][0];
                } else if(perfil.smokingFrequence === 'Raramente') {
                    sum += ills[illIndex].metrics[0][1];
                } else if(perfil.smokingFrequence === 'Às vezes') {
                    sum += ills[illIndex].metrics[0][2];
                } else if(perfil.smokingFrequence === 'Semanalmente') {
                    sum += ills[illIndex].metrics[0][3];
                } else if(perfil.smokingFrequence === 'Diariamente') {
                    sum += ills[illIndex].metrics[0][4];
                }

                if(perfil.alcoholFrequence === 'Nunca') {
                    sum += ills[illIndex].metrics[1][0];
                } else if(perfil.alcoholFrequence === 'Raramente') {
                    sum += ills[illIndex].metrics[1][1];
                } else if(perfil.alcoholFrequence === 'Às vezes') {
                    sum += ills[illIndex].metrics[1][2];
                } else if(perfil.alcoholFrequence === 'Semanalmente') {
                    sum += ills[illIndex].metrics[1][3];
                } else if(perfil.alcoholFrequence === 'Diariamente') {
                    sum += ills[illIndex].metrics[1][4];
                }

                if(perfil.healthyEating === 'Sim') {
                    sum += ills[illIndex].metrics[2][0];
                } else if(perfil.healthyEating === 'Não') {
                    sum += ills[illIndex].metrics[2][1];
                } 

                if(perfil.historicOfCancer === 'Sim, meus pais, irmãos ou filhos') {
                    sum += ills[illIndex].metrics[3][0];
                } else if(perfil.historicOfCancer === 'Sim, meus avós, tios ou primos') {
                    sum += ills[illIndex].metrics[3][1];
                } else if(perfil.historicOfCancer === 'Não') {
                    sum += ills[illIndex].metrics[3][2];
                } 

                sumArray.push({
                    name: 'Neoplasias',
                    sum
                })
            }
        }

        
    
        return patient.toJSON();
    }
}