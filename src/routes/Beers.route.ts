import { Router } from "express";
import BeerController from "../controllers/Beer.controller";

const router = Router();

router.post("/", async (req, res, next) =>
  new BeerController(req, res, next).create()
);

router.get("/", async (req, res, next) =>
  new BeerController(req, res, next).read()
);

router.patch("/", async (req, res, next) =>
  new BeerController(req, res, next).update()
);

router.delete("/", async (req, res, next) =>
  new BeerController(req, res, next).delete()
);

export default router;
