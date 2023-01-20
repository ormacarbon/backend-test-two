import { Router } from "express";

import { getProduct, postProduct } from "../controllers/products.controller";

const productsRoutes = Router();

productsRoutes.get("/", getProduct);
productsRoutes.post("/", postProduct);

export default productsRoutes;

// TODO: Criação das rotas GET, READ, UPDATE
// TODO: Adicionar uma chave de ID para fazer o get de um item especifico
