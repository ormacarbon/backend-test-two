import { IService } from "../interfaces/IService";
import BeerModel from '../database/models/Beer';
import { IBeer } from "../interfaces/IBeer";

export default class BeerService implements IService<IBeer> {
  public async read(): Promise<IBeer[]> {
    const allBeers = await BeerModel.findAll();
    return allBeers;
  }
}