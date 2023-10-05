import { IAddress } from "./IAddress";

export interface IDiagnostics {
  id: string;
  patientId: string;
  addressId: string;
  illnessId: string;
  serviceId: string;
  service: string;
  dateOfService: Date

  porcentage?: {
    name: string;
    value: number;
  }[];
  address?: IAddress; 
  updatedAt: Date;
}