import cacthErrosFunctions from '../common/utils/err/catchErrorsFunction';
import { MenuDTOInterface } from '../dtos/menu/Menu.dto';
import BreweriesService from './Breweries.service';
import MenuModel from '../model/Menu.Schema';
import { ItemMenu } from '../interfaces/Menu/Menu.interface';
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

      const brewery = await BreweriesService.findById(data.owner);

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

  async delete(data: ItemMenu) {
    try {
      const errors = [];

      /**
       * Capture all "+"
       */
      const regex = /(\+)/g;

      data.name = data.name.replace(regex, ' ');

      const brewery = await BreweriesService.findById(data.owner);

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

  async findItemInMenu(data: ItemMenu) {
    try {
      return await MenuModel.findItemInMenuById(data);
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }

  async findMenu(id: string) {
    try {
      return await MenuModel.findMenu(id);
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

  async findMenuFromOwner(name: string) {
    try {
      const findBrewery = await BreweriesService.findByName(name);

      if (findBrewery) {
        const menu = await this.findMenu(findBrewery.id);

        if (menu) {
          return menu.menu;
        }
      }

      return;
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }
}

export default new MenuService();
