import { Request, Response, NextFunction } from "express";
import BeerService from "../services/Beer.service";

export default class BeerController {
  private service: BeerService;

  constructor(
    private req: Request,
    private res: Response,
    private next: NextFunction
  ) {
    this.service = new BeerService();
  }

  public async create() {
    const { body } = this.req;
    const { status, message } = await this.service.create(body);
    return this.res.status(status).json(message);
  }

  public async read() {
    const { status, message } = await this.service.read();
    return this.res.status(status).json(message);
  }

  public async update() {
    const { id, ...update } = this.req.body;
    const { status, message } = await this.service.update(id, update);
    return this.res.status(status).json(message);
  }

  public async delete() {
    const { id } = this.req.body;
    const { status, message } = await this.service.delete(id);
    return this.res.status(status).json(message);
  }
}
