import { Router, Request, Response } from "express";

const productsRoutes = Router();

productsRoutes.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello World!" });
});

export default productsRoutes;

// TODO: Criação das rotas GET, READ, UPDATE
// TODO: Adicionar uma chave de ID para fazer o get de um item especifico
