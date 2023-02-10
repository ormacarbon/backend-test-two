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
  public async read() {
    const { status, message } = await this.service.read();
    return this.res.status(status).json(message);
  }
}
