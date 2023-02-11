import { AppDataSource } from '@database';
import { BeerEntity } from '@entity';

export const BeerRepository = AppDataSource.getRepository(BeerEntity);

export type IBeerRepository = typeof BeerRepository;
