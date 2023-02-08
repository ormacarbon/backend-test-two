import { Request, Response } from "express";
import { DetailsClientService } from "../services/DetailsClientService";

export class DetailsClientController {
  async handle(req: Request, res: Response) {
    const { id } = req.body;

    const detailsClientService = new DetailsClientService();

    const client = await detailsClientService.execute(id);

    return res.json(client);
  }
}
