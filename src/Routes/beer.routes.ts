import { Router } from 'express';
import BeerMongooseRepository from '../Repository/BeerMongooseRepository';
import BeerService from '../Services/BeerService';
import BeerController from '../Controllers/BeerController';
import BeerValidations from '../Middlewares/BeerValidations';

const beerRoute = Router();

const beerRepository = new BeerMongooseRepository();
const beerService = new BeerService(beerRepository);
const beerController = new BeerController(beerService);

beerRoute.post(
  '/',
  BeerValidations.propertiesToCreate,

  BeerValidations.checkProperties,

  beerController.create,
);

beerRoute.get('/:id', beerController.readById);
beerRoute.get('/', beerController.readAll);
beerRoute.patch('/:id', BeerValidations.checkPropertiesToUpdate, beerController.update);
beerRoute.delete('/:id', beerController.delete);

export default beerRoute;
