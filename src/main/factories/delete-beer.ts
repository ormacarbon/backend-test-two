import { DbDeleteBeer } from "../../data/useCases/delete-beer/delete-beer";
import { DeleteBeerMongoRepository } from "../../infra/db/mongodb/repositories/delete-beer/delete-beer-repository";
import { DeleteBeerController } from "../../presentation/controllers/delete-beer/delete-beer";
import { ReadOneMongoRepository } from "../../infra/db/mongodb/repositories/read-one/read-one-repository";
import { DbReadOne } from "../../data/useCases/read-one/read-one";

export const makeDeleteBeerController = (): DeleteBeerController => {
  const deleteBeerRepository = new DeleteBeerMongoRepository();
  const deleteBeer = new DbDeleteBeer(deleteBeerRepository);
  const readOneRepository = new ReadOneMongoRepository();
  const readOne = new DbReadOne(readOneRepository);
  return new DeleteBeerController(deleteBeer, readOne);
}
