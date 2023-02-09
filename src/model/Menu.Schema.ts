import { Schema, model } from 'mongoose';
import { MenuDTOInterface } from '../dtos/menu/Menu.dto';
import { RemoveItemMenu } from '../interfaces/Menu/Menu.interface';
import cacthErrosFunctions from '../common/utils/catchErrorsFunction';
const MenuSchema = new Schema({
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

  async delete(data: RemoveItemMenu) {
    try {
      return await this.menu.deleteMany(
        {
          owner: data.owner
        },
        {
          $pop: {
            id: data.id
          }
        }
      );
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }

  async findItemInMenuById(data: RemoveItemMenu) {
    try {
      const result = await this.menu.findOne({
        owner: data.owner,
        'menu.id': data.id
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

  async findMenu(brewely: string) {
    try {
      return await this.menu.findOne({
        owner: brewely
      });
    } catch (error) {
      cacthErrosFunctions(error);
    }
  }
}

export default new MenuModel();
