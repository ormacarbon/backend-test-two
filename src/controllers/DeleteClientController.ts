import { Request, Response } from "express";
import { DeleteClientService } from "../services/DeleteClientService";

interface ClientRequest {
  id: string;
}
export class DeleteClientController {
  async handle(req: Request, res: Response) {
    const { id } = req.query;
    const deleteClientService = await new DeleteClientService();

    const client = await deleteClientService.execute({ id } as ClientRequest);

    res.json(client);
  }
}
