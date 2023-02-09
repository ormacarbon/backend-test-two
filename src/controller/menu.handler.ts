import { NextFunction, Request, Response } from 'express';
import MenuDTO, { MenuDTOInterface } from '../dtos/menu/Menu.dto';
import { RemoveItemMenu } from '../interfaces/Menu/Menu.interface';

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

      await MenuService.addMenu(menu);

      return res.status(200).json({
        message: 'Added with sucess...',
        statusCode: 200
      });
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

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const data: RemoveItemMenu = {
        owner: req.params.id,
        id: req.params.id_item
      };

      await MenuService.delete(data);

      return res.status(200).json({
        message: 'Removed with sucess...',
        statusCode: 200
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new MenuHandler();
