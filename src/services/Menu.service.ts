import cacthErrosFunctions from '../common/utils/catchErrorsFunction';
import { MenuDTOInterface } from '../dtos/menu/Menu.dto';

import MenuModel from '../model/Menu.Schema';

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
      return await MenuModel.addMenu(data);
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
}

export default new MenuService();
