import express from "express";
import { BeerProductController } from "../controller/beerProductController";
import { IdGenerator } from "../services/idGenerator";
import { BeerProductBusiness } from "../business/beerProductBusiness";
const idGenerator = new IdGenerator();
const beerBusiness = new BeerProductBusiness(idGenerator);
const beerController = new BeerProductController(beerBusiness);

export const beerProductRouter = express.Router();

beerProductRouter.get("/get-products", (req, res) =>
  beerController.getAllProducts(req, res)
);
beerProductRouter.get("/get-product/:id", (req, res) =>
  beerController.getProductById(req, res)
);
beerProductRouter.post("/import-data", (req, res) =>
  beerController.importData(req, res)
);
beerProductRouter.post("/register", (req, res) =>
  beerController.createProductRegister(req, res)
);
beerProductRouter.put("/update-product/:id", (req, res) =>
  beerController.updateProduct(req, res)
);
beerProductRouter.delete("/delete-product/:id", (req, res) =>
  beerController.deleteProduct(req, res)
);
