import { Router } from "express";

import * as productsController from "../controllers/products";

const productsRoutes = Router();

productsRoutes.get("/products", productsController.getAllProducts);
productsRoutes.get("/products/:id", productsController.getProduct);
productsRoutes.delete("/products/:id", productsController.deleteProduct);
productsRoutes.post("/products", productsController.createBodyValidation, productsController.postProduct);
productsRoutes.post("/products/migrations", productsController.createBodyValidation, productsController.postProducts);

export default productsRoutes;

// TODO: Criação das rotas GET, READ, UPDATE, DELETE
// TODO: Adicionar uma chave de ID para fazer o get de um item especifico
