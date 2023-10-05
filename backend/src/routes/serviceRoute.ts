import express, { Request, Response } from "express"
import { resolverController } from "../adapters/resolverController";
import { CreateServiceController } from "./controllers/CreateServiceController";
import { ServiceRepository } from "../repositories/ServiceRepository";
import { ClientRepository } from "../repositories/ClientRepository";
import { GetServiceController } from "./controllers/GetServiceController";

export const serviceRoute = express.Router();

const serviceRepo = new ServiceRepository();
const clientRepo = new ClientRepository();

const createServiceController = new CreateServiceController(serviceRepo, clientRepo);
const getAllServiceController = new GetServiceController(serviceRepo);

serviceRoute.post('/', resolverController(async (req: Request, res: Response) => {
    return await createServiceController.handle(req, res);
}))

serviceRoute.get('/', resolverController(async (req: Request, res: Response) => {
    return await getAllServiceController.handle(req, res);
}))

