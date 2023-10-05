import express, { Request, Response } from "express"
import { resolverController } from "../adapters/resolverController";
import { ServiceRepository } from "../repositories/ServiceRepository";
import { CreateServiceController } from "./controllers/CreateServiceController";
import { GetServiceController } from "./controllers/GetServiceController";
import { ClientRepository } from "../repositories/ClientRepository";

export const serviceRoute = express.Router();

const serviceRepo = new ServiceRepository();
const clientRepo = new ClientRepository();

let createServiceController = new CreateServiceController(serviceRepo, clientRepo);
let getServiceController = new GetServiceController(serviceRepo);

serviceRoute.post('/:id', resolverController(async (req: Request, res: Response) => {
    return await createServiceController.handle(req, res);
}))

serviceRoute.get('/:id', resolverController(async (req: Request, res: Response) => {
    return await getServiceController.handle(req, res);
}))