import { Router } from "express";
import { BeerController } from "../controllers/BeerController";

const beerRouter = Router();

const beerController = new BeerController();

beerRouter.get("/", beerController.findBeers);


export { beerRouter }