import { Address } from "../entities/Address";
import { IAddress } from "../interfaces/IAddress";
import { IAddressRepository } from "../interfaces/IAddressRepository";

export class CreateAddressService {
    constructor(
        private addressRepo: IAddressRepository
    ) {}

    async execute(input: IAddress): Promise<IAddress | null> {
        const addr = Address.create(input);
        const resultCreated = await this.addressRepo.insert(addr.toJSON());
        const result = await this.addressRepo.get(resultCreated);

        return result;
    }
}