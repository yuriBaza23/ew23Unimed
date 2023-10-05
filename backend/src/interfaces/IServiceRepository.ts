import { IService } from "./IService";

export interface IServiceRepository {
    insert(input: IService): Promise<void>;
    read(id: string): Promise<IService>;
    readAll(): Promise<IService[]>
}