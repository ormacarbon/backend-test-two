import { calculateReputation } from '../../common/calculateReputation';
import catchErrorsFunctions from '../../common/utils/err/catchErrorsFunction';
import {
  Reputation,
  ReputationUpdate
} from '../../interfaces/reputation/Reputation.interface';
import BreweriesModel from '../../model/Breweries.Schema';
import BreweriesService from '../Breweries.service';

import { InvalidArgumentError } from '../err/Errors';
import ReputationsFunction from './ReputationsFunctions.service';

class ReputationService {
  async add(reputation: Reputation) {
    try {
      const brewery = await BreweriesService.findByID(reputation.id);

      if (!brewery) {
        throw new InvalidArgumentError('nao posso continuar');
      }

      ReputationsFunction.verifyIntegrationReputationNumber(
        reputation.reputation
      );

      const checkIfUserHasAlreadyRated =
        await ReputationsFunction.CheckIfUserHasAlreadyRated(reputation);

      if (!checkIfUserHasAlreadyRated) {
        const data = {
          list_reputation: brewery.list_reputation,
          reputation: reputation.reputation,
          user_id: reputation.user_id,
          id: reputation.id
        };

        await BreweriesModel.addListReputation({
          user_id: reputation.user_id,
          id: reputation.id,
          reputation: reputation.reputation
        });
        await ReputationsFunction.updateReputationFunction(data);

        return;
      } else {
        return;
      }
    } catch (error) {
      catchErrorsFunctions(error);
    }
  }

  async updateReputation(reputation: ReputationUpdate) {
    if (reputation.list_reputation.length > 0) {
      const calculate = calculateReputation(reputation.list_reputation);

      return BreweriesModel.updateReputation({
        id: reputation.id,
        reputation: calculate
      });
    }

    return BreweriesModel.updateReputation({
      id: reputation.id,
      reputation: reputation
    });
  }

  async updateReputationUser(idUser: string, reputation: number) {
    try {
      return await BreweriesModel.updateReputationUser(idUser, reputation);
    } catch (error) {
      catchErrorsFunctions(error);
    }
  }
}

export default new ReputationService();
