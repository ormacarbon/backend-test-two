import catchErrorsFunctions from "../../common/utils/err/catchErrorsFunction";
import BreweriesModel from "../../model/Breweries.Schema";

class TagsService {
    async searchByTags(data: string[]) {
        try {
          const captureResponse = data.map((search) =>
            BreweriesModel.searchByTags(search).then((data) => data)
          );
    
          return Promise.all(captureResponse).then((resolvedData) => {
            return resolvedData;
          });
        } catch (error) {
          catchErrorsFunctions(error);
        }
      }
    
      async updateTags(id: string, data: string[]) {
        try {
          data.forEach(async (tag) => {
            await BreweriesModel.addTag(id, tag);
          });
        } catch (error) {
            catchErrorsFunctions(error);
        }
      }
}

export default new TagsService()