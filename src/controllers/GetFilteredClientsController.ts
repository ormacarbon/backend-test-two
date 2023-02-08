import { Request, Response } from "express";
import { GetFilteredClientsService } from "../services/GetFilteredClientsService";

interface ClientRequest {
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

export class GetFilteredClientsController {
  async handle(req: Request, res: Response) {
    const {
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
    } = req.query;

    const getFilteredClientsService = await new GetFilteredClientsService();

    const clients = await getFilteredClientsService.execute({
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

    res.json(clients);
  }
}
