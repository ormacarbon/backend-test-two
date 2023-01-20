import { Request, Response } from "express";

import { Product } from "../models/products.model";
import { IProduct } from "../types/products.types";

const getProducts = async (req: Request, res: Response) => {
  try {
    const response = await Product.find({});
    res.status(200).json({ message: response });
  } catch (err) {
    res.status(500).json({ message: "No user found" });
  }
}

const postProduct = async (req: Request, res: Response) => {
  const request: IProduct = {
    ...req.body
  };

  try {
    if (!request.name) throw new Error();
    const response = await Product.create({ ...request });
    res.status(201).json({ message: response });
  } catch (err) {
    res.status(500).json({ message: "User is not defined" });
  }
}

export {
  postProduct,
  getProducts
};