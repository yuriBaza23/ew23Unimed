import express, { Request, Response } from "express";
import { resolverController } from "../adapters/resolverController";
import { CreateIllnessController } from "./controllers/CreateIllnessController";
// import { IllnessRepository } from "../repositories/IllnessRepository";
import { GetIllnessController } from "./controllers/GetIllnessController";
import { GetAllIllnessController } from "./controllers/GetAllIllnessController";

export const illnessRoute = express.Router();
// const illnessRepo = new IllnessRepository();

// const createIllnessController = new CreateIllnessController(illnessRepo);
// const getIllnessController = new GetIllnessController(illnessRepo);
// const getAllIllnessController = new GetAllIllnessController(illnessRepo);

// illnessRoute.post('/', resolverController(async (req: Request, res: Response) => {
//     return await createIllnessController.handle(req, res);
// }))

// illnessRoute.get('/:id', resolverController(async (req: Request, res: Response) => {
//     return await getIllnessController.handle(req, res);
// }))

// illnessRoute.get('/', resolverController(async (req: Request, res: Response) => {
//     return await getAllIllnessController.handle(req, res);
// }))