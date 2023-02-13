import { Router } from "express";
import { BeerController } from "../controllers/BeerController";
import { validateBeerSchema } from "../middlewares/validateBeerSchema";

const beerRouter = Router();

const beerController = new BeerController();

beerRouter.get("/:id", beerController.findOneBeer)
beerRouter.delete("/:id", beerController.deleteOneBeer);
beerRouter.put("/:id", validateBeerSchema, beerController.updateOneBeer);
beerRouter.post("/", validateBeerSchema, beerController.insertOneBeer);
beerRouter.get("/", beerController.findBeers);


export { beerRouter }