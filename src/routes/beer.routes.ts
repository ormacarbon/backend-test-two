import { Router } from "express";
import { BeerController } from "../controllers/BeerController";

const beerRouter = Router();

const beerController = new BeerController();

beerRouter.get("/", beerController.findBeers);
beerRouter.post("/", beerController.insertOneBeer);


export { beerRouter }