import { Router } from "express";
import BeerController from "../controllers/Beer.controller";

const router = Router();

router.get("/", async (req, res, next) =>
  new BeerController(req, res, next).read()
);

export default router;
