import { ReadOneController } from "../../presentation/controllers/read-one/read-one";
import { DbReadOne } from '../../data/useCases/read-one/read-one';
import { ReadOneMongoRepository } from '../../infra/db/mongodb/repositories/read-one/read-one-repository';

export const makeReadOneController = (): ReadOneController => {
  const repository = new ReadOneMongoRepository();
  const readOne = new DbReadOne(repository);
  return new ReadOneController(readOne);
}
