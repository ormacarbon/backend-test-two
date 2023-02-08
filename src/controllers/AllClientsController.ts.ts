import { Request, Response } from "express";
import { AllClientsService } from "../services/AllClientsService";

export class AllClientsController {
  async handle(req: Request, res: Response) {
    const allClientsService = await new AllClientsService();

    const clients = await allClientsService.execute();

    return res.json(clients);
  }
}
