import { IAddress } from "../interfaces/IAddress";
import { IAddressRepository } from "../interfaces/IAddressRepository";

export class ListAddressService {
  constructor(
    private addressRepo: IAddressRepository
  ) { }

  async execute(): Promise<IAddress[] | null> {
    const result = await this.addressRepo.list();

    return result;
  }
}