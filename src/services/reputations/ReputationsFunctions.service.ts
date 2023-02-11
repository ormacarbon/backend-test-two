import BreweriesService from '../Breweries.service';
import ReputationService from './Reputation.service';
import { ReputationUpdate } from '../../interfaces/reputation/Reputation.interface';
import { calculateReputation } from '../../common/calculateReputation';
import BreweriesModel from '../../model/Breweries.Schema';
import catchErrorsFunctions from '../../common/utils/err/catchErrorsFunction';
import { InvalidArgumentError } from '../err/Errors';

class ReputationsFunctions {
  updateReputation(reputation: ReputationUpdate) {
    if (reputation.list_reputation.length > 0) {
      const calculate = calculateReputation(reputation.list_reputation);

      return BreweriesModel.updateReputation({
        id: reputation.id,
        reputation: calculate
      });
    } else {
      return BreweriesModel.updateReputation({
        id: reputation.id,
        reputation: reputation.reputation
      });
    }
  }

  async updateReputationFunction(reputation: ReputationUpdate) {
    const reputations = reputation.list_reputation.map(
      (value) => value.reputation
    );

    const sendReputationData: ReputationUpdate = {
      id: reputation.id,
      list_reputation: reputations,
      user_id: reputation.user_id,
      reputation: reputation.reputation
    };

    if (reputations) {
      await this.updateReputation(sendReputationData);
    }
  }

  async CheckIfUserHasAlreadyRated(reputation: any) {
    try {
      const findReputationFromUser =
        await BreweriesService.findUserInReputation(reputation.user_id);

      if (!findReputationFromUser) {
        return;
      }

      const data = await ReputationService.updateReputationUser(
        reputation.user_id,
        reputation.reputation
      );

      const reputations = findReputationFromUser.list_reputation.map(
        (value) => value.reputation
      );

      const updateReputation = {
        list_reputation: reputations,
        id: reputation.id,
        user_id: reputation.user_id
      };

      await ReputationService.updateReputation(updateReputation);

      return data;
    } catch (error) {
      catchErrorsFunctions(error);
    }
  }

  verifyIntegrationReputationNumber<T>(reputation: T): T {
    const errors = [];

    if (!reputation) {
      errors.push('Error: type not accept');
    }

    if (reputation > 5 || reputation < 0) {
      errors.push('Values accept: 1 betweeen 5');
    }

    if (errors.length) {
      throw new InvalidArgumentError(JSON.stringify(errors));
    }

    return reputation;
  }
}

export default new ReputationsFunctions();
