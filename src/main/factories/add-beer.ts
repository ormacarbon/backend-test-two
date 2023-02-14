import { AddBeerController } from "../../presentation/controllers/add-beer/add-beer";
import { ValidateBeerBody } from '../../presentation/utils/validate-beer-data/validate-beer-data';
import { DbAddBeer } from "../../data/useCases/add-beer/add-beer";
import { AddBeerMongoRepository } from '../../infra/db/mongodb/repositories/add-beer/add-beer-repository';

export const makeAddBeerController = (): AddBeerController => {
  const repository = new AddBeerMongoRepository();
  const addBeer = new DbAddBeer(repository);
  const validadeBeerBode = new ValidateBeerBody();
  return new AddBeerController(addBeer, validadeBeerBode);
}
