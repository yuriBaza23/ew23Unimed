import express, { Request, Response } from 'express'
import { resolverController } from '../adapters/resolverController';

export const authRoute = express.Router();

authRoute.get('/', resolverController(async (req: Request, res: Response) => {
    
}))