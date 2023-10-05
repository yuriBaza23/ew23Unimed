import { IIllness } from "../interfaces/IIllness";
import { IIllnessRepository } from "../interfaces/IIllnessRepository";

export class GetAllIllnessService {
    constructor(private illnessRepo: IIllnessRepository) { }

    async execute(): Promise<IIllness[]> {
        return await this.illnessRepo.readAll();
    }
}