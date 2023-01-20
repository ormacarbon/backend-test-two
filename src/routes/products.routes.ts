import { Router } from "express";

import { getAllProducts, postProduct, getProduct, deleteProduct } from "../controllers/products.controller";

const productsRoutes = Router();

productsRoutes.get("/products", getAllProducts);
productsRoutes.get("/product", getProduct);
productsRoutes.delete("/product", deleteProduct);
productsRoutes.post("/product", postProduct);
// productsRoutes.post("/products", postProducts);


export default productsRoutes;

// TODO: Criação das rotas GET, READ, UPDATE, DELETE
// TODO: Adicionar uma chave de ID para fazer o get de um item especifico
