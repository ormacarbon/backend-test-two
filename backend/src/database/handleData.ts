import { IBeer } from '../interfaces/IBeer';
import Beer from './models/index';

export const listBeers = async (limit: number, skip: number) => Beer.find({}, null, { limit, skip });

export const filterBeer = async (nameQuery: string, countryQuery: string) =>
	Beer.find({ name: new RegExp(nameQuery, 'i'), country: new RegExp(countryQuery, 'i') }, null, { limit: 100 });

export const addBeer = async (body: IBeer) => Beer.create(body);

export const updateBeer = async (id: string, body: IBeer) => Beer.findByIdAndUpdate(id, body);

export const deleteBeer = async (id: string) => Beer.findByIdAndDelete(id);
