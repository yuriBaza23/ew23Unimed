import express, { Request, Response } from "express";
import { resolverController } from "../adapters/resolverController";
import { CreateAdminController } from "./controllers/CreateAdminController";
import { HashRepository } from "../repositories/HashRepository";
import { AdminRepository } from "../repositories/AdminRepository";
import { UpdateAdminController } from "./controllers/UpdateAdminController";

export const adminRoute = express.Router();

const hashRepo = new HashRepository();
const adminRepo = new AdminRepository();

const createAdminController = new CreateAdminController(adminRepo, hashRepo);
const updateAdminController = new UpdateAdminController(adminRepo, hashRepo);

adminRoute.post('/', resolverController(async (req: Request, res: Response) => {
    return await createAdminController.handle(req, res);
}))

adminRoute.put('/', resolverController(async (req: Request, res: Response) => {
    return await updateAdminController.handle(req, res);
}))