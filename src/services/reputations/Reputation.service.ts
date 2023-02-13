import { CalculateReputation } from '../../common/calculateReputation';
import catchErrorsFunctions from '../../common/utils/err/catchErrorsFunction';
import {
  Reputation,
  ReputationUpdate,
  updateReputationUserAlreadyReted
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
        await ReputationsFunction.CheckIfUserHasAlreadyRated(
          reputation.user_id
        );

      if (checkIfUserHasAlreadyRated) {
        return await ReputationsFunction.updateReputationUser(reputation);
      } else {
        const findAndAddUserInReputationList =
          await this.FindAndAddItemInListReputaiton(reputation);

        const reputations = findAndAddUserInReputationList?.list_reputation
          .map((value) => value.reputation)
          .filter((x) => x !== undefined) as number[];

        if (reputations) {
          const reputationsCalculateUptaded = CalculateReputation(reputations);

          const updatedReputation = await this.updateReputation({
            id: reputation.id,
            reputation: reputationsCalculateUptaded
          });

          return updatedReputation;
        }
      }
    } catch (error) {
      catchErrorsFunctions(error);
    }
  }

  async updateReputation(reputation: ReputationUpdate) {
    return BreweriesModel.updateReputation(reputation);
  }

  async FindAndAddItemInListReputaiton(reputation: Reputation) {
    try {
      return BreweriesModel.addListReputation(reputation);
    } catch (error) {
      catchErrorsFunctions(error);
    }
  }

  async updateListReputationUserAlreadyRated(
    updateReputationUserAlreadyReted: updateReputationUserAlreadyReted
  ) {
    try {
      return await BreweriesModel.updateListReputationUserAlreadyRated(
        updateReputationUserAlreadyReted
      );
    } catch (error) {
      catchErrorsFunctions(error);
    }
  }
}

export default new ReputationService();
