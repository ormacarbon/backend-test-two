import { Router } from 'express';
import BeerMongooseRepository from '../Repository/BeerRepository';
import BeerService from '../Services/BeerService';
import BeerController from '../Controllers/BeerController';

const beerRoute = Router();

const beerRepository = new BeerMongooseRepository();
const beerService = new BeerService(beerRepository);
const beerController = new BeerController(beerService);

beerRoute.post('/', beerController.create);

export default beerRoute;
