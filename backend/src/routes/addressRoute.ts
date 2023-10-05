import { Request, Response, Router } from "express";
import { resolverController } from "../adapters/resolverController";
import { AddressRepository } from "../repositories/AddressRepository";
import { CreateAddressController } from "./controllers/CreateAddressController";
import { GetAddressController } from "./controllers/GetAddressController";
import { ListAddressController } from "./controllers/ListAddressController";

export const addressRoute = Router();

const addressRepo = new AddressRepository();

const createAddressController = new CreateAddressController(addressRepo);
const getAddressController = new GetAddressController(addressRepo);
const listAddressController = new ListAddressController(addressRepo);

addressRoute.post('/', resolverController(async (req: Request, res: Response) => {
  return await createAddressController.handle(req, res);
}))

addressRoute.get('/:id', resolverController(async (req: Request, res: Response) => {
  return await getAddressController.handle(req, res);
}))

addressRoute.get('/', resolverController(async (req: Request, res: Response) => {
  return await listAddressController.handle(req, res);
}))