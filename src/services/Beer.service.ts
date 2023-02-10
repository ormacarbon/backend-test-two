import IBeer from "../interfaces/IBeer";
import IController from "../interfaces/IController";
import BeerODM from "../models/BeerODM";

export default class BeerService {
  private model: BeerODM;
  constructor() {
    this.model = new BeerODM();
  }
  public async read(): Promise<IController<IBeer[]>> {
    const beers = await this.model.read();
    return { status: 200, message: beers };
  }
}
