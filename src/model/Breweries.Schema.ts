import { Schema, model } from 'mongoose';
import { handleErrorDatabase } from '../common/utils/err/errorDatabaseHandler';
import { constructorBreweryInterface } from '../interfaces/Breweries/Brewery.interface';
import { BreweriesUpdateInterface } from '../interfaces/Breweries/BreweryUptade.interface';
import { Filters } from '../interfaces/Filters.interface';
import cacthErrosFunctions from '../common/utils/err/catchErrorsFunction';
import { InternalServerError } from '../services/err/Errors';
import catchErrorsFunctions from '../common/utils/err/catchErrorsFunction';

import { Reputation } from '../interfaces/reputation/Reputation.interface';

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
  path: String,
  external_urls: {
    type: Object,
    website: String
  },
  list_reputation: [
    {
      reputation: Number,
      user_id: String,
      created_at: {
        type: Date,
        default: Date.now()
      }
    }
  ],
  reputation: {
    type: Number,
    default: 0
  }
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

  async create(brewerie: constructorBreweryInterface) {
    try {
      const data = await this.brewerie
        .create(brewerie)
        .catch(handleErrorDatabase);

      if (data) {
        return data;
      }

      throw new InternalServerError('ERROR');
    } catch (error) {
      catchErrorsFunctions(error);
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

  async update(id: string, brewerieUpdate: BreweriesUpdateInterface) {
    try {
      return await this.brewerie.findOneAndUpdate({ _id: id }, brewerieUpdate);
    } catch (error) {
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

  async reputation(id: string) {
    try {
      const data = await this.brewerie.findOne({ id });

      return data?.reputation;
    } catch (error) {
      catchErrorsFunctions(error);
    }
  }

  async addListReputation(reputation: Reputation) {
    try {
      const data = await this.brewerie.findByIdAndUpdate(reputation.id, {
        $push: {
          list_reputation: {
            user_id: reputation.user_id,
            reputation: reputation.reputation
          }
        }
      });

      return data;
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }

  async updateReputation(reputation: any) {
    try {
      await this.brewerie.updateOne(
        {
          _id: reputation.id
        },
        {
          reputation: reputation.reputation
        }
      );
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }

  async findUserInReputation(idUser: string) {
    try {
      return await this.brewerie.findOne({
        'list_reputation.user_id': idUser
      });
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }

  async updateReputationUser(idUser: string, reputation: number) {
    try {
      const data = await this.brewerie.updateOne(
        { 'list_reputation.user_id': idUser },
        { $set: { 'list_reputation.$.reputation': reputation } }
      );

      console.log(data);

      return data;
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }
}

export default new BreweryModel();
