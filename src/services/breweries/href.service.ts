import catchErrorsFunctions from '../../common/utils/err/catchErrorsFunction';
import BreweriesSchema from '../../model/Breweries.Schema';

class HrefService {
  async updateHref(id: string, href: string) {
    try {
      return await BreweriesSchema.updateHref(id, href);
    } catch (error) {
      catchErrorsFunctions(error);
    }
  }
}

export default new HrefService();
