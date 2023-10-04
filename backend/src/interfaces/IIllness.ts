import { IClient } from "./IClient";

export interface IIllness {
    id: string;
    percentege?: number;
    cost?: string;
    averageAge?: string;
    womenPercentage?: number;
    diseasedClients?: IClient[];
}