import product from "../model/product";
import { Request, Response } from "express";
import { IProduct } from "../types/types";

export const createProduct = async (req: Request<IProduct>, res: Response) => {
  try {
  
    const { abv, category, city, country, ibu, name, state, coordinates,website,description,address } = req.body;
  
    const ProductAlreadyExists = await product.findOne({ name: req.body.name });
  
    if (ProductAlreadyExists)
      return res.status(400).json({ message: "Product arealdy exists" });

  
    const items = new product({
      abv,
      address,
      category,
      city,
      coordinates,
      country,
      description,
      ibu,
      name,
      state,
      website,
    });

    const savedItems = await items.save();
    res.status(201).json(savedItems);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
