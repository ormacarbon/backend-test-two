import { handleErrorDatabase } from '../common/utils/errorDatabaseHandler';
import BreweriesInterface from '../interfaces/Breweries.interface';
import BreweriesModel from '../model/Breweries.Schema';

class BreweriesService {
  async findAllBrewelers() {
    try {
      return BreweriesModel.findAllBreweries();
    } catch (error) {
      return error;
    }
  }

  async store(brewerie: BreweriesInterface) {
    return await BreweriesModel.saveData(brewerie).catch(handleErrorDatabase);
  }
}

export default new BreweriesService();
