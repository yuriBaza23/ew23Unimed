import { PrismaClient } from "@prisma/client";
import { IClient } from "../interfaces/IClient";
import { IAddressRepository } from "../interfaces/IAddressRepository";
import { IAddress } from "../interfaces/IAddress";

let prisma = new PrismaClient();

export class AddressRepository implements IAddressRepository {
  async insert(input: IAddress): Promise<string> {
    const res = await prisma.address.create({
      data: { ...input }
    })

    return res.id
  }

  async get(id: string): Promise<IAddress | null> {
    const address = await prisma.address.findFirst({
      where: { id }
    })
    return address;
  }

  async list(): Promise<IAddress[]> {
    const address = await prisma.address.findMany()
    return address;
  }
}