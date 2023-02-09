import { IService } from "../interfaces/IService";
import BeerModel from '../database/models/Beer';
import { IBeer } from "../interfaces/IBeer";
import { ErrorTypes } from "../errors/ErrorTypes";

export default class BeerService implements IService<IBeer> {
  public async read(): Promise<IBeer[]> {
    const allBeers = await BeerModel.findAll();
    return allBeers;
  }

  public async readOne(id: string): Promise<IBeer> {
    const beer = await BeerModel.findOne({ where: { id } });
    if (!beer) throw new Error(ErrorTypes.NotFound);
    return beer;
  }
}