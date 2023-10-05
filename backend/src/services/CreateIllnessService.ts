import { Illness } from "../entities/Illness";
import { IIllness } from "../interfaces/IIllness";
import { IIllnessRepository } from "../interfaces/IIllnessRepository";

export class CreateIllnessService {
    constructor(private illnessRepo: IIllnessRepository) { }

    async execute(props: IIllness): Promise<IIllness> {
        let illness = Illness.create(props);
        let result = illness.toJSON();

        await this.illnessRepo.insert(result);
        return result;
    }
}