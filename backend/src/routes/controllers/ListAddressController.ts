import { Request, Response } from "express";
import { IAddressRepository } from "../../interfaces/IAddressRepository";
import { ListAddressService } from "../../services/ListAddressService";

export class  ListAddressController {
  constructor(
    private addressRepo: IAddressRepository,
  ) {}

  async handle(_: Request, res: Response): Promise<Response> {
    let listAddressService = new ListAddressService(this.addressRepo);
    let result = await listAddressService.execute();

    return res.status(200).json(result)
  }
}