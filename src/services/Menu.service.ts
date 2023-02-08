import cacthErrosFunctions from '../common/utils/catchErrorsFunction';
import MenuModel from '../model/Menu.Schema';

class MenuService {
  async store(idOwner: string) {
    try {
      await MenuModel.store(idOwner);
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }
}

export default new MenuService();
