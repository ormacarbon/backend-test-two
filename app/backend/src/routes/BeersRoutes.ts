import { Router } from 'express';
import IBeersController from '../controllers/BeersControllers';
import IBeersModel from '../models/BeersModel';
import IBeersService from '../services/BeersService';
import BeersMiddlewares from '../middlewares/BeersMiddlewares';

const route = Router();
 
const beersModel = new IBeersModel();
const middlewares = new BeersMiddlewares();
const beersService = new IBeersService(beersModel);
const beersController = new IBeersController(beersService);

route.post(
  '/beers',
  (req, res, next) => middlewares.validAddressBeer(req, res, next),
  (req, res, next) => middlewares.validBeersName(req, res, next),
  (req, res, next) => middlewares.validCaracterBeer(req, res, next),
  (req, res) => beersController.create(req, res),
);

route.get('/beers', (req, res) => beersController.readAll(req, res));

export default route;