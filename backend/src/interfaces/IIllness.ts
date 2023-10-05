import { IClient } from "./IClient";
import { IMetrics } from "./IMetrics";

export interface IIllness {
    id?: string;
    name: string;
    percentege?: string;
    cost?: string;
    averageAge?: string;
    womenPercentage?: string;
    diseasedClients?: IClient[];
    illnessMetrics: IMetrics[];
}