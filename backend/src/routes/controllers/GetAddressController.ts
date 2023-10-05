import { Request, Response } from "express";
import { IAddressRepository } from "../../interfaces/IAddressRepository";
import { GetAddressService } from "../../services/GetAddressService";

export class GetAddressController {
  constructor(
    private addressRepo: IAddressRepository,
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    let { id } = req.params;

    let getAddressService = new GetAddressService(this.addressRepo);
    let result = await getAddressService.execute(id);

    return res.status(200).json(result)
  }
}