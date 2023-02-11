import { calculateReputation } from '../common/calculateReputation';
import catchErrorsFunctions from '../common/utils/err/catchErrorsFunction';
import {
  Reputation,
  ReputationUpdate
} from '../interfaces/reputation/Reputation.interface';
import BreweriesModel from '../model/Breweries.Schema';
import BreweriesService from './Breweries.service';

import { InvalidArgumentError } from './err/Errors';

class ReputationService {
  async add(reputation: Reputation) {
    try {
      const errors = [];

      if (reputation.reputation < 0 || reputation.reputation > 5) {
        errors.push(`Error: The number ${reputation.reputation} not accepted `);
      }

      await BreweriesService.findByID(reputation.id);

      if (errors.length) {
        throw new InvalidArgumentError(JSON.stringify(errors));
      }

      const data = await BreweriesModel.addReputation(reputation);

      if (data) {
        const reputations = data.list_reputation.map(
          (value) => value.reputation
        );

        const sendReputationData: ReputationUpdate = {
          id: data.id,
          list_reputation: reputations,
          user_id: reputation.user_id
        };

        if (reputations) {
          await this.updateReputation(sendReputationData);
        }
      }
    } catch (error) {
      catchErrorsFunctions(error);
    }
  }

  async updateReputation(reputation: ReputationUpdate) {
    const calculate = calculateReputation(reputation.list_reputation);

    return BreweriesModel.updateReputation({
      id: reputation.id,
      reputation: calculate
    });
  }
}

export default new ReputationService();
