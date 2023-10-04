import express, { Request, Response } from "express"
import { resolverController } from "../adapters/resolverController";
import { CreateAdminController } from "./controllers/CreateAdmin.controller";
import { HashRepository } from "../repositories/HashRepository";
import { AdminRepository } from "../repositories/AdminRepository";

export const adminRoute = express.Router();

const hashRepo = new HashRepository();
const adminRepo = new AdminRepository();

const createAdminController = new CreateAdminController(adminRepo, hashRepo);

adminRoute.post('/', resolverController(async (req: Request, res: Response) => {
    return await createAdminController.handle(req, res);
}))