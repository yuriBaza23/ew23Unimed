import { Request, Response } from "express";
import { IDiagnosticsRepository } from "../../interfaces/IDiagnosticsRepository";
import { CreateDiagnosticsService } from "../../services/CreateDiagnosticsService";

export class CreateDiagnosticsController {
  constructor(
    private diagnosticRepo: IDiagnosticsRepository,
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    let input = req.body;

    let createDiagnosticsService = new CreateDiagnosticsService(this.diagnosticRepo);
    await createDiagnosticsService.execute(input);

    return res.status(201).send()
  }
}