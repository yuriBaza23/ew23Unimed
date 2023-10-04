import express, { Request, Response } from "express"
import { resolverController } from "../adapters/resolverController";
import { ServiceRepository } from "../repositories/ServiceRepository";
import { CreateServiceController } from "./controllers/CreateServiceController";

export const serviceRoute = express.Router();
const serviceRepo = new ServiceRepository();

let createServiceController = new CreateServiceController(serviceRepo);

serviceRoute.post('/', resolverController(async (req: Request, res: Response) => {
    return await createServiceController.handle(req, res);
}))

serviceRoute.get('/:code', resolverController(async (req: Request, res: Response) => {
    
}))