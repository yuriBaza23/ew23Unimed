import express, { Request, Response } from 'express'
import { resolverController } from '../adapters/resolverController';
import { DiagnosticRepository } from '../repositories/DiagnosticRepository';
import { GetDiagnosticsController } from './controllers/GetDiagnosticsController';

export const diagnosticsRoute = express.Router();
const diagnosticsRepo = new DiagnosticRepository()
const getDiagnostics = new GetDiagnosticsController(diagnosticsRepo);


diagnosticsRoute.get('/', resolverController(async (req: Request, res: Response) => {
    return await getDiagnostics.handle(req, res);
}))