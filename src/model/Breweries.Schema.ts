import { Schema, model } from 'mongoose';
import { handleErrorDatabase } from '../common/utils/errorDatabaseHandler';
import BreweriesInterface from '../interfaces/Breweries/Breweries.interface';
import { BreweriesUpdateInterface } from '../interfaces/Breweries/BreweryUptade.interface';
import { Filters } from '../interfaces/Filters.interface';

import { InternalServerError } from '../services/err/Errors';

const BrewerieSchema = new Schema({
  abv: Number,
  address: String,
  category: String,
  city: String,
  coordinates: {
    type: Array,
    default: [0, 0]
  },
  country: String,
  description: String,
  ibu: Number,
  name: {
    type: String
  },
  state: String,
  external_urls: {
    type: Object,
    website: String,
    href: String
  },
  href: String
});

class BreweriesModel {
  brewerie = model('breweries', BrewerieSchema);

  async findAllBreweries() {
    return await this.brewerie.find();
  }

  async find(id: string) {
    try {
      const brewery = await this.brewerie
        .findById(id)
        .catch(handleErrorDatabase);

      return brewery;
    } catch (error) {
      throw new InternalServerError(error as string);
    }
  }

  async saveData(brewerie: BreweriesInterface) {
    try {
      const data = await this.brewerie
        .create(brewerie)
        .catch(handleErrorDatabase);

      if (data) {
        return data;
      }

      throw new InternalServerError('ERROR');
    } catch (error) {
      console.log(error);
    }
  }

  async findCoordenatesDatabase(coords: number[]) {
    return await this.brewerie.findOne({
      coordinates: coords
    });
  }

  async findAndDelete(id: string) {
    try {
      const brewery = await this.brewerie
        .findByIdAndDelete(id)
        .catch(handleErrorDatabase);

      return brewery;
    } catch (error) {
      throw new InternalServerError(error as string);
    }
  }

  async findWebSiteHref(website: string) {
    try {
      const find = await this.brewerie.findOne({
        website: website
      });

      return find;
    } catch (error) {
      throw new InternalServerError(error as string);
    }
  }

  async findAndUpdate(brewerieUpdate: BreweriesUpdateInterface) {
    try {
      return await this.brewerie.findByIdAndUpdate(
        brewerieUpdate.id,
        brewerieUpdate
      );
    } catch (error) {
      console.log(error);
      throw new InternalServerError(error as string);
    }
  }

  async findByName(href: string) {
    try {
      return await this.brewerie.findOne({
        href
      });
    } catch (error) {
      throw new InternalServerError(error as string);
    }
  }

  async findBreweryWithFilter(filters: Filters) {
    return await this.brewerie.find(filters);
  }
}

export default new BreweriesModel();
