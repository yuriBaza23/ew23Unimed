import { IIllness } from "../interfaces/IIllness";
import { IIllnessRepository } from "../interfaces/IIllnessRepository";

export class GetIllnessService {
    constructor(private illnessRepo: IIllnessRepository) { }

    async execute(id: string): Promise<IIllness> {
        return await this.illnessRepo.read(id);
    }
}