import { NextFunction, Request, Response } from 'express';
import MenuDTO, { MenuDTOInterface } from '../dtos/menu/Menu.dto';

import MenuService from '../services/Menu.service';

class MenuHandler {
  async addMenu(req: Request, res: Response, next: NextFunction) {
    try {
      const body = MenuDTO.parse(req.body);
      const { id } = req.params;

      const menu: MenuDTOInterface = {
        name: body.name,
        description: body.description,
        ingredients: body.ingredients,
        owner: id
      };

      const data = await MenuService.addMenu(menu);

      return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  async show(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await MenuService.show();

      return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
}

export default new MenuHandler();
