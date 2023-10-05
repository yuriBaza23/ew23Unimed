import { IAddress } from "../interfaces/IAddress";
import { IAddressRepository } from "../interfaces/IAddressRepository";

export class GetAddressService {
  constructor(
    private addressRepo: IAddressRepository
  ) { }

  async execute(id: string): Promise<IAddress | null> {
    const result = await this.addressRepo.get(id);

    return result;
  }
}