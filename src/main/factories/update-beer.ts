import { UpdateBeerController } from "../../presentation/controllers/update-beer/update-beer";
import { DbUpdateBeer } from '../../data/useCases/update-beer/update-beer';
import { UpdateBeerMongoRepository } from '../../infra/db/mongodb/repositories/update-beer/update-beer-repository';
import { ReadOneMongoRepository } from '../../infra/db/mongodb/repositories/read-one/read-one-repository';
import { DbReadOne } from '../../data/useCases/read-one/read-one';
import { ValidateBeerBody } from '../../presentation/utils/validate-beer-data/validate-beer-data';

export const makeUpdateBeerController = (): UpdateBeerController => {
  const updateBeerRepository = new UpdateBeerMongoRepository();
  const updateBeer = new DbUpdateBeer(updateBeerRepository);
  const readOneRepository = new ReadOneMongoRepository();
  const readOne = new DbReadOne(readOneRepository);
  const validateBody = new ValidateBeerBody();
  return new UpdateBeerController(updateBeer, readOne, validateBody);
}
