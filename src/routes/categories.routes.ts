import { Router, Request, Response } from "express";

const categoriesRoutes = Router();

categoriesRoutes.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello World!" });
});

export default categoriesRoutes;
