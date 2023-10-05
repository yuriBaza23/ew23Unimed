import { IAddress } from "../interfaces/IAddress";
import { createUUID } from "../utils/createUUID";

export class Address {
  private readonly id: string;
  private city: IAddress['city']; 
  private state: IAddress['state'];
  private patientId: IAddress['patientId'];

  private constructor(props: IAddress) {
    this.id = props.id || createUUID();
    this.city = props.city;
    this.state = props.state;
    this.patientId = props.patientId;
  }

  static create(props: IAddress): Address {
    return new Address(props);
  }

  public toJSON(): IAddress {
    return {
      id: this.id,
      city: this.city,
      state: this.state,
      patientId: this.patientId
    }
  }
}