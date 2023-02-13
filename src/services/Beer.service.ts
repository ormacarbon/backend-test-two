import IBeer from "../interfaces/IBeer";
import IController from "../interfaces/IController";
import BeerODM from "../database/models/BeerODM";
import StatusHttp from "../utils/StatusHttp";
import { schemaNewBeer } from "../utils/JoiValidations";
import Beer from "../domains/Beer";

export default class BeerService {
  private model: BeerODM;

  constructor() {
    this.model = new BeerODM();
  }

  public createBeerDomain(beer: IBeer | null): Beer | null {
    if (beer) return new Beer(beer);
    return null;
  }

  public async create(
    beer: IBeer
  ): Promise<IController<Beer | string | Error | null>> {
    if (!beer)
      return {
        status: StatusHttp.BAD_REQUEST,
        message: "please enter all fields",
      };
    const validate = schemaNewBeer.validate(beer);
    if (validate.error)
      return {
        status: StatusHttp.BAD_REQUEST,
        message: validate.error.message,
      };
    try {
      const newBeer = await this.model.create(beer);
      return {
        status: StatusHttp.CREATED,
        message: this.createBeerDomain(newBeer),
      };
    } catch (error) {
      return {
        status: StatusHttp.INTERNAL_SERVER_ERROR,
        message:
          "sorry, looks like there was some internal problem, this is not your fault",
      };
    }
  }

  public async read(): Promise<IController<string | Beer[] | null | unknown>> {
    try {
      const beers = await this.model.read();
      return {
        status: StatusHttp.OK,
        message: beers.map((beer) => this.createBeerDomain(beer)),
      };
    } catch (error) {
      return {
        status: StatusHttp.INTERNAL_SERVER_ERROR,
        message:
          "sorry, looks like there was some internal problem, this is not your fault",
      };
    }
  }

  public async update(
    id: string,
    update: Partial<IBeer>
  ): Promise<IController<Beer | null | string>> {
    if (!id)
      return {
        status: StatusHttp.BAD_REQUEST,
        message: "please provide an id",
      };
    if (Object.keys(update).length === 0)
      return {
        status: StatusHttp.BAD_REQUEST,
        message: "please tell us what you want to update",
      };
    try {
      const updatedBeer = await this.model.update(id, update);
      return {
        status: StatusHttp.OK,
        message: this.createBeerDomain(updatedBeer),
      };
    } catch (error) {
      return { status: StatusHttp.NOT_FOUND, message: "id not found" };
    }
  }

  public async delete(id: string): Promise<IController<string>> {
    if (!id)
      return {
        status: StatusHttp.BAD_REQUEST,
        message: "please provide an id",
      };
    try {
      await this.model.delete(id);
      return { status: StatusHttp.OK, message: "successfully deleted" };
    } catch (error) {
      return { status: StatusHttp.NOT_FOUND, message: "id not found" };
    }
  }
}
