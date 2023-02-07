import express from 'express';
import { BeerController } from './../controller/beerController';
import { IdGenerator } from './../services/idGenerator';
import { BeerBusiness } from './../business/beerBusiness';
const idGenerator = new IdGenerator();
const beerBusiness = new BeerBusiness(idGenerator);
const beerController = new BeerController(beerBusiness);

export const beerRouter = express.Router();

beerRouter.get('/get-products', (req, res) =>
  beerController.getAllProducts(req, res)
);
beerRouter.get('/get-product/:id', (req, res) =>
  beerController.getProductById(req, res)
);
beerRouter.post('/import-data', (req, res) =>
  beerController.importData(req, res)
);
beerRouter.post('/register', (req, res) =>
  beerController.createBeerRegister(req, res)
);
beerRouter.put('/update-product/:id', (req, res) =>
  beerController.updateProduct(req, res)
);
beerRouter.delete('/delete-product/:id', (req, res) =>
  beerController.deleteProduct(req, res)
);



