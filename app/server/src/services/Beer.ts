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
    const newBeer = await BeerModel.create({...beer, id});
    return newBeer;
  }

  public async update(id: string, beer: IBeer): Promise<void> {
    const parsed = beerZodSchema.safeParse(beer);
    if (!parsed.success) throw parsed.error;

    const findBeer = await BeerModel.findByPk(id);
    if (!findBeer) throw new Error(ErrorTypes.NotFound);

    await BeerModel.update(beer, {where: {id}});
  }

  public async delete(id: string): Promise<void> {
    const beer = await BeerModel.findByPk(id);
    if (!beer) throw new Error(ErrorTypes.NotFound);
    await BeerModel.destroy({ where: { id } });
  }
}