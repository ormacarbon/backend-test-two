import { NextFunction, Response } from 'express';
import { Reputation } from '../interfaces/reputation/Reputation.interface';
import { CustomRequest } from '../middlewares/Authorization';
import ReputationService from '../services/Reputation.service';

class ReputationHandler {
  async add(req: CustomRequest, res: Response, next: NextFunction) {
    try {
      const { reputation, brewery } = req.params;

      let id;

      if (typeof req.token === 'object') {
        id = req.token.id;
      }

      const data: Reputation = {
        id: brewery,
        user_id: id,
        reputation: Number(reputation)
      };

      const reponse = await ReputationService.add(data);

      return res.status(200).json(reponse);
    } catch (error) {
      next(error);
    }
  }
}

export default new ReputationHandler();
