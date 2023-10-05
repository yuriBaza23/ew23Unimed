import { IService } from "./IService";

export interface IServiceRepository {
    insert(input: IService): Promise<void>;
    read(code: string): Promise<IService>;
}