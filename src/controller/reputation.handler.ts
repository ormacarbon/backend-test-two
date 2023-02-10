import { NextFunction, Request, Response } from 'express';

class ReputationHandler {
  async add(req: Request, res: Response, next: NextFunction) {
    try {
      return res.status(200).json('I need of little time');
    } catch (error) {
      next(error);
    }
  }
}

export default new ReputationHandler();
