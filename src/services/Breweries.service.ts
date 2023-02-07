import BreweriesInterface from '../interfaces/Breweries.interface';
import BreweriesModel from '../model/Breweries.Schema';
import { InternalServerError, InvalidArgumentError } from './err/Errors';

class BreweriesService {
  async findAllBrewelers() {
    try {
      return BreweriesModel.findAllBreweries();
    } catch (error) {
      return error;
    }
  }

  async find(id: string) {
    try {
      const brewerie = await BreweriesModel.find(id);
      console.log(brewerie);
      if (!brewerie) {
        throw new InvalidArgumentError(`Brewerie not found`);
      }

      return brewerie;
    } catch (error) {
      throw new InternalServerError(error as string);
    }
  }

  async store(brewerie: BreweriesInterface) {
    try {
      const coords = await this.verifyCoordenates(brewerie.coordinates);

      if (coords) {
        throw new Error('The coordinates are already being used');
      }

      return await BreweriesModel.saveData(brewerie);
    } catch (error) {
      throw new InternalServerError(error as string);
    }
  }

  async verifyCoordenates(coords: number[]) {
    return await BreweriesModel.findCoordenatesDatabase(coords);
  }
}

export default new BreweriesService();
