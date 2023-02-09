import cacthErrosFunctions from '../common/utils/catchErrorsFunction';
import { MenuDTOInterface } from '../dtos/menu/Menu.dto';
import BreweriesService from './Breweries.service';
import MenuModel from '../model/Menu.Schema';
import { RemoveItemMenu } from '../interfaces/Menu/Menu.interface';
import { InvalidArgumentError } from './err/Errors';
import { randomUUID } from 'crypto';

class MenuService {
  async store(idOwner: string) {
    try {
      await MenuModel.store(idOwner);
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }

  async addMenu(data: MenuDTOInterface) {
    try {
      const errors = [];

      const brewery = await BreweriesService.findByID(data.owner);

      if (!brewery) {
        errors.push('Error: Brewery not find');
      }

      const itemAlreadyExists = await this.findItemInMenuByName(data);

      if (itemAlreadyExists) {
        errors.push('Error: Item already exists');
      }

      if (errors.length > 0) {
        throw new InvalidArgumentError(JSON.stringify(errors));
      }

      data.id = randomUUID();

      await MenuModel.addMenu(data);
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }

  async show() {
    try {
      return await MenuModel.AllMenus();
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }

  async delete(data: RemoveItemMenu) {
    try {
      const errors = [];

      const brewery = await BreweriesService.findByID(data.owner);

      if (!brewery) {
        errors.push('Error: Brewery not found');
      }

      const item = await this.findItemInMenu(data);

      if (!item) {
        errors.push('Error: Item not found');
      }

      if (errors.length > 0) {
        throw new InvalidArgumentError(JSON.stringify(errors));
      }

      await MenuModel.delete(data);
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }

  async findItemInMenu(data: RemoveItemMenu) {
    try {
      return await MenuModel.findItemInMenuById(data);
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }

  async findItemInMenuByName(data: MenuDTOInterface) {
    try {
      return await MenuModel.findItemInMenuByName(data);
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }
}

export default new MenuService();
