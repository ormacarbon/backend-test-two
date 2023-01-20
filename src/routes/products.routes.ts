import { Router } from "express";

import { getProducts, postProduct } from "../controllers/products.controller";

const productsRoutes = Router();

productsRoutes.get("/products", getProducts);
productsRoutes.post("/product", postProduct);

export default productsRoutes;

// TODO: Criação das rotas GET, READ, UPDATE
// TODO: Adicionar uma chave de ID para fazer o get de um item especifico
