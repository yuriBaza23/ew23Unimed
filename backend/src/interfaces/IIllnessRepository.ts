import { IIllness, IIllnessOutput } from "./IIllness";

export interface IIllnessRepository {
    insert(input: IIllness): Promise<void>;
    read(id: string): Promise<IIllness>;
    readAll(): Promise<IIllnessOutput[]>;
}