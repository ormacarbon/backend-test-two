import { Schema, model } from 'mongoose';
import { handleErrorDatabase } from '../common/utils/errorDatabaseHandler';
import { constructorBreweryInterface } from '../interfaces/Breweries/Brewery.interface';
import { BreweriesUpdateInterface } from '../interfaces/Breweries/BreweryUptade.interface';
import { Filters } from '../interfaces/Filters.interface';
import cacthErrosFunctions from '../common/utils/catchErrorsFunction';
import { InternalServerError } from '../services/err/Errors';

export const BrewerySchema = new Schema({
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
    type: String,
    unique: true
  },
  state: String,
  website: String,
  path: String
});

class BreweryModel {
  brewerie = model('breweries', BrewerySchema);

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
      cacthErrosFunctions(error);
    }
  }

  async saveData(brewerie: constructorBreweryInterface) {
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

  async delete(id: string) {
    try {
      const brewery = await this.brewerie
        .findByIdAndDelete(id)
        .catch(handleErrorDatabase);

      return brewery;
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }

  async findWebSiteHref(website: string) {
    try {
      const find = await this.brewerie.findOne({
        website: website
      });

      return find;
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }

  async update(brewerieUpdate: BreweriesUpdateInterface) {
    try {
      return await this.brewerie.updateOne(brewerieUpdate);
    } catch (error) {
      console.log(error);
      cacthErrosFunctions(error);
    }
  }

  async findByName(path: string) {
    try {
      return await this.brewerie.findOne({
        path
      });
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }

  async findBreweryWithFilter(filters: Filters) {
    return await this.brewerie.find(filters);
  }

  async findName(name: string) {
    try {
      const nameFind = await this.brewerie.findOne({
        name
      });

      return nameFind;
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }

  async deleteMany() {
    try {
      await this.brewerie.deleteMany();
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }
}

export default new BreweryModel();
