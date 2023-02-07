import { Request, Response } from "express";
import { CreateClientService } from "../services/CreateClientService";

export class CreateClientController {
  async handle(req: Request, res: Response) {
    const {
      abv,
      address,
      category,
      city,
      coordinates,
      country,
      description,
      ibu,
      name,
      state,
      website,
    } = req.body;

    const createClientService = new CreateClientService();

    const client = await createClientService.execute({
      abv,
      address,
      category,
      city,
      coordinates,
      country,
      description,
      ibu,
      name,
      state,
      website,
    });

    return res.json(client);
  }
}
