import { IService } from "../interfaces/IService";
import BeerModel from '../database/models/Beer';
import { v4 as uuidv4 } from 'uuid';import { IBeer, beerZodSchema } from "../interfaces/IBeer";
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

  public async create(beer: IBeer): Promise<IBeer> {
    const parsed = beerZodSchema.safeParse(beer);
    if (!parsed.success) throw parsed.error;

    const id = uuidv4()
    const data = {...beer, id}
    const newBeer = await BeerModel.create(data);
    return newBeer;
  }

  public async delete(id: string): Promise<void> {
    const beer = await BeerModel.findByPk(id);
    if (!beer) throw new Error(ErrorTypes.NotFound);
    await BeerModel.destroy({ where: { id } });
  }
}