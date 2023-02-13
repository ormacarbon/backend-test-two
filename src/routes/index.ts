import { Router } from "express";
import { beerRouter } from "./beer.routes";

const router = Router();

router.use("/beers", beerRouter)

export { router }