import { Schema, model } from 'mongoose';
import { MenuWithIdOwnerTranfer } from '../interfaces/Menu/Menu.interface';
import { InternalServerError } from '../services/err/Errors';

const MenuSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    unique: true
  },
  menu: [
    {
      name: String,
      description: String,
      ingredients: []
    }
  ]
});

class MenuModel {
  private menu = model('menu', MenuSchema);

  async store(idOwner: string) {
    try {
      const create = await this.menu.create({
        owner: idOwner,
        menu: []
      });

      return create;
    } catch (error) {
      throw new InternalServerError(error as string);
    }
  }

  async addMenu(data: MenuWithIdOwnerTranfer) {
    try {
      const storeMenu = await this.menu.findOneAndUpdate(
        data.id as unknown as Schema.Types.ObjectId,
        {
          $push: {
            menu: data.menu
          }
        }
      );

      if (storeMenu) {
        return storeMenu.menu;
      }

      return;
    } catch (error) {
      throw new InternalServerError(error as string);
    }
  }

  async AllMenus() {
    try {
      return await this.menu.find();
    } catch (error) {
      throw new InternalServerError(error as string);
    }
  }
}

export default new MenuModel();
