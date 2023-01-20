import { Router } from "express";

import { getAllProducts, postProduct, getProduct, deleteProduct } from "../controllers/products.controller";

const productsRoutes = Router();

productsRoutes.get("/products", getAllProducts);
productsRoutes.get("/products/:id", getProduct);
productsRoutes.delete("/products/:id", deleteProduct);
productsRoutes.post("/products", postProduct);

export default productsRoutes;

// TODO: Criação das rotas GET, READ, UPDATE, DELETE
// TODO: Adicionar uma chave de ID para fazer o get de um item especifico
