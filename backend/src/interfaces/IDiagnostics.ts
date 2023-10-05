import { IAddress } from "./IAddress";
import { IClient } from "./IClient";

export interface IDiagnostics {
  id: string;
  patientId: string;
  addressId: string;
  illnessId: string;
  serviceId: string;
  service: string;
  dateOfService: Date

  illnessName?: string;
  porcentage?: number;
  patient?: IClient;
  address?: IAddress; 
}