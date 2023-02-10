import { NextFunction, Request, Response } from 'express';
import MenuDTO, { MenuDTOInterface } from '../dtos/menu/Menu.dto';
import { ItemMenu } from '../interfaces/Menu/Menu.interface';

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
      const data: ItemMenu = {
        owner: req.params.id,
        name: req.params.name_item
      };

      await MenuService.delete(data);

      return res.status(204).json({
        message: 'Removed with sucess...',
        statusCode: 204
      });
    } catch (error) {
      next(error);
    }
  }

  async findMenuFromOwner(req: Request, res: Response, next: NextFunction) {
    const { brewery_name } = req.params;

    try {
      const data = await MenuService.findMenuFromOwner(brewery_name);

      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
}

export default new MenuHandler();
