import express, { Response } from 'express'
import { resolverController } from '../adapters/resolverController';
import { DiagnosticRepository } from '../repositories/DiagnosticRepository';

export const diagnosticsRoute = express.Router();
const diagnosticsRepo = new DiagnosticRepository()

diagnosticsRoute.get('/', resolverController(async (_: Request, res: Response) => {
    let all = await diagnosticsRepo.getAll();
    return res.status(200).json(all) 
}))