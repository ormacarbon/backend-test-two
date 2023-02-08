import { Request, Response } from "express";
import { UpdateClientService } from "../services/UpdateClientService";

interface ClientRequest {
  id: string;
  abv?: number;
  address?: string;
  category?: string;
  city?: string;
  lat?: number;
  long?: number;
  country?: string;
  description?: string;
  ibu?: number;
  name?: string;
  state?: string;
  website?: string;
}
export class UpdateClientController {
  async handle(req: Request, res: Response) {
    const { id } = req.query;
    const {
      abv,
      address,
      category,
      city,
      lat,
      long,
      country,
      description,
      ibu,
      name,
      state,
      website,
    } = req.body;

    const updateClientService = await new UpdateClientService();

    const client = await updateClientService.execute({
      id,
      abv,
      address,
      category,
      city,
      lat,
      long,
      country,
      description,
      ibu,
      name,
      state,
      website,
    } as ClientRequest);

    res.json(client);
  }
}
