import { Request, Response } from "express";
import { IAddressRepository } from "../../interfaces/IAddressRepository";
import { CreateAddressService } from "../../services/CreateAddressService";

export class CreateAddressController {
  constructor(
    private addressRepo: IAddressRepository,
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    let input = req.body;

    let createAddressService = new CreateAddressService(this.addressRepo);
    let result = await createAddressService.execute(input);

    return res.status(200).json(result)
  }
}