import { IClient } from "./IClient";

export interface IService {
    id: string;
    code: string;
    date: Date;
    professional: string;
    description: string;
    cost: string;
    patientId: string;
}