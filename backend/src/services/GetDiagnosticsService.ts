import { IClientRepository } from "../interfaces/IClientRepository";
import { IDiagnosticsRepository } from "../interfaces/IDiagnosticsRepository";
import { IIllnessRepository } from "../interfaces/IIllnessRepository";

const get = async (diag: any, ills: any, patientRepo: any, sumArray: any, obj: any) => {
    const ok = new Promise((resolve, reject) =>
        diag.map(async (d: any) => {
            let perfil = await patientRepo.read(d.patientId);
            for (let illIndex = 0; illIndex < ills.length; illIndex++) {
                if (ills[illIndex].name === 'Neoplasias') {
                    let sum = 0;
                    if (perfil.smokingFrequence === 'Nunca') {
                        sum += ills[illIndex].metrics[0][0];
                    } else if (perfil.smokingFrequence === 'Raramente') {
                        sum += ills[illIndex].metrics[0][1];
                    } else if (perfil.smokingFrequence === 'Às vezes') {
                        sum += ills[illIndex].metrics[0][2];
                    } else if (perfil.smokingFrequence === 'Semanalmente') {
                        sum += ills[illIndex].metrics[0][3];
                    } else if (perfil.smokingFrequence === 'Diariamente') {
                        sum += ills[illIndex].metrics[0][4];
                    }

                    if (perfil.alcoholFrequence === 'Nunca') {
                        sum += ills[illIndex].metrics[1][0];
                    } else if (perfil.alcoholFrequence === 'Raramente') {
                        sum += ills[illIndex].metrics[1][1];
                    } else if (perfil.alcoholFrequence === 'Às vezes') {
                        sum += ills[illIndex].metrics[1][2];
                    } else if (perfil.alcoholFrequence === 'Semanalmente') {
                        sum += ills[illIndex].metrics[1][3];
                    } else if (perfil.alcoholFrequence === 'Diariamente') {
                        sum += ills[illIndex].metrics[1][4];
                    }

                    if (perfil.healthyEating === 'Sim') {
                        sum += ills[illIndex].metrics[2][0];
                    } else if (perfil.healthyEating === 'Não') {
                        sum += ills[illIndex].metrics[2][1];
                    }

                    if (perfil.historicOfCancer === 'Sim, meus pais, irmãos ou filhos') {
                        sum += ills[illIndex].metrics[3][0];
                    } else if (perfil.historicOfCancer === 'Sim, meus avós, tios ou primos') {
                        sum += ills[illIndex].metrics[3][1];
                    } else if (perfil.historicOfCancer === 'Não') {
                        sum += ills[illIndex].metrics[3][2];
                    }

                    sumArray.push({
                        id: ills[illIndex].id,
                        name: 'Neoplasias',
                        value: sum
                    })
                }

                const higherIllness = sumArray.reduce(function(prev: any, current: any) {
                    return (prev.value > current.value) ? prev.id : current.id
                })

                obj.push({
                    id: d.id,
                    patientId: d.patientId,
                    addressId: d.addressId,
                    illnessId: higherIllness.id,
                    serviceId: d.serviceId,
                    service: d.service,
                    dateOfService: d.dateOfService,
                    porcentage: sumArray,
                    updatedAt: d.updatedAt
                })
            }
            resolve(obj);
        })
    )

    return ok;
}

export class GetDiagnosticsService {
    constructor(
        private diagnosticsRepo: IDiagnosticsRepository,
        private patientRepo: IClientRepository,
        private illRepo: IIllnessRepository) { }

    async execute(): Promise<any> {
        const diag = await this.diagnosticsRepo.getAll();
        let ills = await this.illRepo.readAll();
        

        let sumArray: any[] = [];
        let obj: any[] = [];

        const res = await get(
            diag, 
            ills, 
            this.patientRepo, 
            sumArray, 
            obj
        )
        return res
    }
}