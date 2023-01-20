import { Request, Response } from "express";
import { ProductModel } from "../models/products.model";
import { Product } from "../types/products.types";

const getProduct = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello World!" });
}

const postProduct = async (req: Request, res: Response) => {
  const { abv, category, city, coordinates, country, ibu, name, state } = req.body;

  const request: Product = {
    abv,
    category,
    city,
    coordinates,
    country,
    ibu,
    name,
    state
  };

  try {
    const response = await ProductModel.create(request);
    if (!response.name) {
      throw new Error();
    }
    res.status(201).json({ message: "Product created successfully" });
  } catch (err) {
    res.status(500).json({ message: "User is not defined" });
  }
}

export {
  postProduct,
  getProduct
};