import { IIllnessOutput } from "../interfaces/IIllness";
import { IIllnessRepository } from "../interfaces/IIllnessRepository";

export class GetAllIllnessService {
    constructor(private illnessRepo: IIllnessRepository) { }

    async execute(): Promise<IIllnessOutput[]> {
        return await this.illnessRepo.readAll();
    }
}