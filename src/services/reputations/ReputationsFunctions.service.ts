import BreweriesService from '../Breweries.service';
import ReputationService from './Reputation.service';
import { updateReputationUserAlreadyReted } from '../../interfaces/reputation/Reputation.interface';

import catchErrorsFunctions from '../../common/utils/err/catchErrorsFunction';
import { InvalidArgumentError } from '../err/Errors';
import { CalculateReputation } from '../../common/calculateReputation';

class ReputationsFunctions {
  async CheckIfUserHasAlreadyRated(user_id: string) {
    try {
      const findReputationFromUser =
        await BreweriesService.findUserInReputation(user_id);

      if (!findReputationFromUser) {
        return;
      }
      return findReputationFromUser;
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

  async updateReputationUser(reputation: updateReputationUserAlreadyReted) {
    const updatedListReputation =
      await ReputationService.updateListReputationUserAlreadyRated(reputation);

    const reputations = updatedListReputation?.list_reputation
      .map((value) => value.reputation)
      .filter((x) => x !== undefined) as number[];

    const calculateReputation = CalculateReputation(reputations);

    await ReputationService.updateReputation({
      id: reputation.id,
      reputation: calculateReputation
    });
  }
}

export default new ReputationsFunctions();
