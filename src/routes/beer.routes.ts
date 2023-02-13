import { Router } from "express";
import { BeerController } from "../controllers/BeerController";
import { validateBeerSchema } from "../middlewares/validateBeerSchema";

const beerRouter = Router();

const beerController = new BeerController();

beerRouter.get("/:id", beerController.findOneBeer)
beerRouter.get("/", beerController.findBeers);
beerRouter.post("/", validateBeerSchema, beerController.insertOneBeer);


export { beerRouter }