import express from "express"
import BeerController from "../controllers/beersController.js"

const router = express.Router();

router
    .get("/beers", BeerController.getBeers)
    .get("/beers/search", BeerController.getBeerByName)
    .get("/beers/:id", BeerController.getBeerById)
    .post("/beers", BeerController.createBeer)
    .put("/beers/:id", BeerController.updateBeer)
    .delete("/beers/:id", BeerController.deleteBeer)

export default router;