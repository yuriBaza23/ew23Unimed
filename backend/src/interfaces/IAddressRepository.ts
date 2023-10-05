import { IAddress } from "./IAddress";

export interface IAddressRepository {
    insert(input: IAddress): Promise<string>;
    get(id: string): Promise<IAddress | null>;
    list(): Promise<IAddress[]>
}