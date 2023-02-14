import { Schema, model } from 'mongoose';
import { handleErrorDatabase } from '../common/utils/err/errorDatabaseHandler';
import { constructorBreweryInterface } from '../interfaces/Breweries/Brewery.interface';
import { BreweriesUpdateInterface } from '../interfaces/Breweries/BreweryUptade.interface';
import { Filters } from '../interfaces/Filters.interface';
import cacthErrosFunctions from '../common/utils/err/catchErrorsFunction';

import catchErrorsFunctions from '../common/utils/err/catchErrorsFunction';

import {
  Reputation,
  ReputationUpdate,
  updateReputationUserAlreadyReted
} from '../interfaces/reputation/Reputation.interface';

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
    type: String
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
  },
  tags: {
    type: Array
  }
});

class BreweryModel {
  brewerie = model('breweries', BrewerySchema);

  async findAllBreweries<T>(limit: T) {
    return await this.brewerie.find().limit(limit as number);
  }

  async findById(id: string) {
    try {
      const brewery = await this.brewerie
        .findById(id)
        .catch(handleErrorDatabase);

      return brewery;
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }

  async store(brewerie: constructorBreweryInterface) {
    try {
      const data = await this.brewerie.create(brewerie);

      return data;
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

  async findBreweleries<T>(filters: Filters, limit: T) {
    return await this.brewerie.find(filters).limit(limit as number);
  }

  async findName(name: string) {
    try {
      return await this.brewerie.findOne({
        name: name
      });
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

  async updateReputation(reputation: ReputationUpdate) {
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

  async findUserByIdReputation(idUser: string) {
    try {
      const data = await this.brewerie.findOne({
        'list_reputation.user_id': idUser
      });

      return data;
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }

  async updateListReputationUserAlreadyRated(
    updateReputationUserAlreadyReted: updateReputationUserAlreadyReted
  ) {
    try {
      console.log(updateReputationUserAlreadyReted);

      const data = await this.brewerie.findOneAndUpdate(
        { 'list_reputation.user_id': updateReputationUserAlreadyReted.user_id },
        {
          $set: {
            'list_reputation.$.reputation':
              updateReputationUserAlreadyReted.reputation
          }
        }
      );

      return data;
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }
  async searchByTags(search: string) {
    try {
      return await this.brewerie.find({
        tags: search
      });
    } catch (error) {
      catchErrorsFunctions(error);
    }
  }

  async addTag(id: string, tag: string) {
    try {
      return await this.brewerie.updateOne(
        {
          _id: id
        },
        {
          $push: {
            tags: tag
          }
        }
      );
    } catch (error) {
      catchErrorsFunctions(error);
    }
  }
}

export default new BreweryModel();
