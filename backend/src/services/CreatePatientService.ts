import { IClient } from "../interfaces/IClient";
import { IClientRepository } from "../interfaces/IClientRepository";
import { createUUID } from "../utils/createUUID";

export class CreatePatientService {
    constructor(private clientRepo: IClientRepository) { }

    async execute(props: IClient): Promise<IClient> {
        let id = createUUID();
        await this.clientRepo.insert({id: id, ...props});
        return {id: id, ...props};
    }
}