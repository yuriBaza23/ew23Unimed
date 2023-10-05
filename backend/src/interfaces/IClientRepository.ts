import { IClient } from "./IClient";

export interface IClientRepository {
    insert(input: IClient): Promise<void>;
    insertService(id: string, code: string): Promise<void>;
    update(input: IClient): Promise<void>;
    read(id: String): Promise<IClient>;
}