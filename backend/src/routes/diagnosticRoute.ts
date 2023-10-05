import express, { Request, Response } from 'express'
import { resolverController } from '../adapters/resolverController';
import { DiagnosticRepository } from '../repositories/DiagnosticRepository';
import { GetDiagnosticsController } from './controllers/GetDiagnosticsController';
import { ClientRepository } from '../repositories/ClientRepository';
import { IllnessRepository } from '../repositories/IllnessRepository';
import { CreateDiagnosticsController } from './controllers/CreateDiagnosticsController';

export const diagnosticsRoute = express.Router();
const diagnosticsRepo = new DiagnosticRepository()
const patientRepo = new ClientRepository();
const illnessRepo = new IllnessRepository();
const getDiagnostics = new GetDiagnosticsController(diagnosticsRepo, patientRepo, illnessRepo);
const postDiagnostics = new CreateDiagnosticsController(diagnosticsRepo);

diagnosticsRoute.get('/', resolverController(async (req: Request, res: Response) => {
    return await getDiagnostics.handle(req, res);
}))

diagnosticsRoute.post('/', resolverController(async (req: Request, res: Response) => {
    return await postDiagnostics.handle(req, res);
}))