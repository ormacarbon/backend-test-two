import { Request, Response, NextFunction } from 'express';

export default class BeersMiddlewares {
  validBeersName = (req: Request, res: Response, next: NextFunction) => {
    const { obj } = req.body;
    const { name } = obj;
    if (!name) {
      return res.status(400).json({ message: 'Name is required' });
    }
    next();
    return false;
  };

  validCaracterBeer = (req: Request, res: Response, next: NextFunction) => {
    const { obj } = req.body;
    const {
      abv, ibu, description, category, 
    } = obj;
    if (!abv || !ibu || !description || !category) {
      return res.status(400).json({ message: 'caracters is required' });
    }
    next();
    return false;
  };

  validAddressBeer = (req: Request, res: Response, next: NextFunction) => {
    const { obj } = req.body;
    const {
      address, city, coordinates, country, state, 
    } = obj;
    if (!address || !city || !coordinates || !country || !state) {
      return res.status(400).json({ message: 'address is required' });
    }
    next();
    return false;
  };
}