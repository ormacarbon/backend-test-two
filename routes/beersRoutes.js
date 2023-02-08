import express from "express"
import BeerController from "../controllers/beersController.js"

const router = express.Router();

router
    .get("/beers", BeerController.getBeers)

export default router;