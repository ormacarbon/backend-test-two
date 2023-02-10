import { Schema, model } from 'mongoose';
import { MenuDTOInterface } from '../dtos/menu/Menu.dto';
import { ItemMenu } from '../interfaces/Menu/Menu.interface';
import cacthErrosFunctions from '../common/utils/catchErrorsFunction';

export const MenuSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    unique: true
  },
  menu: [
    {
      name: String,
      description: String,
      ingredients: [],
      id: String
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
      cacthErrosFunctions(error);
    }
  }

  async addMenu(data: MenuDTOInterface) {
    try {
      await this.menu.findOneAndUpdate(
        {
          owner: data.owner
        },
        {
          $push: {
            menu: {
              name: data.name,
              description: data.description,
              ingredients: data.ingredients,
              id: data.id
            }
          }
        }
      );
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }

  async AllMenus() {
    try {
      return await this.menu.find();
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }

  async delete(data: ItemMenu) {
    try {
      const result = await this.menu.updateOne(
        { owner: data.owner },
        {
          $pull: { menu: { ['name']: data.name } }
        }
      );

      return result;
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }

  async findItemInMenuById(data: ItemMenu) {
    try {
      const result = await this.menu.findOne({
        owner: data.owner,
        'menu.name': data.name
      });

      return result;
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }

  async findItemInMenuByName(data: MenuDTOInterface) {
    try {
      const result = await this.menu.findOne({
        owner: data.owner,
        'menu.name': data.name
      });

      return result;
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }

  async findMenu(id: string) {
    try {
      const data = await this.menu.findOne({
        owner: id
      });

      return data;
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }

  async deleteMany() {
    try {
      return await this.menu.deleteMany();
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }
}

export default new MenuModel();
