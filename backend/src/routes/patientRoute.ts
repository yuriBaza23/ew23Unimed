import express, { Request, Response } from "express"
import { resolverController } from "../adapters/resolverController";
import { UpdatePatientController } from "./controllers/UpdatePatientController";
import { ClientRepository } from "../repositories/ClientRepository";
import { CreatePatientController } from "./controllers/CreatePatientController";

export const patientRoute = express.Router();

const clientRepo = new ClientRepository();
const updatePatient = new UpdatePatientController(clientRepo);
const createPatient = new CreatePatientController(clientRepo);

patientRoute.post("/", resolverController(async (req: Request, res: Response) => {
    return await createPatient.handle(req, res);
}))

patientRoute.patch("/", resolverController(async (req: Request, res: Response) => {
    return await updatePatient.handle(req, res);
}))