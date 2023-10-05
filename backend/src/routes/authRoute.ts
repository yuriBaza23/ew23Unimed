import express, { Request, Response } from 'express'
import { resolverController } from '../adapters/resolverController';
import { AuthenticateController } from './controllers/AuthenticateController';
import { AdminRepository } from '../repositories/AdminRepository';
import { HashRepository } from '../repositories/HashRepository';
import { JWTRepository } from '../repositories/JWTRepository';

export const authRoute = express.Router();

const adminRepo = new AdminRepository();
const hashRepo = new HashRepository();
const jwtRepo = new JWTRepository();
const auth = new AuthenticateController(adminRepo, hashRepo, jwtRepo);

authRoute.get('/', resolverController(async (req: Request, res: Response) => {
    return await auth.handle(req, res);
}))