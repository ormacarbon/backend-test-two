import { Schema, model } from 'mongoose';
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
  menu = model('menu', MenuSchema);

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
}

export default new MenuModel();
