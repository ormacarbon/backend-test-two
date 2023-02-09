import { Schema, model } from 'mongoose';
import { MenuDTOInterface } from '../dtos/menu/Menu.dto';
import { InternalServerError } from '../services/err/Errors';
import { RemoveItemMenu } from '../interfaces/Menu/Menu.interface';
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
      throw new InternalServerError(error as string);
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
      throw new InternalServerError(error as string);
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
      throw new InternalServerError(error as string);
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
      throw new InternalServerError(error as string);
    }
  }
}

export default new MenuModel();
