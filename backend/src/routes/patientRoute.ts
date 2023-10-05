import express, { Request, Response } from "express";
import { resolverController } from "../adapters/resolverController";
import { UpdatePatientController } from "./controllers/UpdatePatientController";
import { ClientRepository } from "../repositories/ClientRepository";
import { CreatePatientController } from "./controllers/CreatePatientController";
import { IllnessRepository } from "../repositories/IllnessRepository";
import { DiagnosticRepository } from "../repositories/DiagnosticRepository";
import { ReadPatientController } from "./controllers/ReadPatientController";

export const patientRoute = express.Router();

const clientRepo = new ClientRepository();
const illRepo = new IllnessRepository();
const diagnosticsRepo = new DiagnosticRepository();

const updatePatient = new UpdatePatientController(
  clientRepo,
  illRepo,
  diagnosticsRepo
);
const createPatient = new CreatePatientController(clientRepo);
const readPatient = new ReadPatientController(clientRepo);

patientRoute.post(
  "/",
  resolverController(async (req: Request, res: Response) => {
    return await createPatient.handle(req, res);
  })
);

patientRoute.patch(
  "/",
  resolverController(async (req: Request, res: Response) => {
    return await updatePatient.handle(req, res);
  })
);

patientRoute.get(
  "/",
  resolverController(async (req: Request, res: Response) => {
    return await readPatient.handle(req, res);
  })
);
