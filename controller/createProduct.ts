import product from "../model/product";
import { Request, Response } from "express";
import { IProduct } from "../types/types";
import { validateProduct } from "../validation/validation";

export const createProduct = async (req: Request<IProduct>, res: Response) => {
  try {
    const validation = validateProduct(req.body)
    if(validation.error) return res.status(400).json({message: 'Invalid Data'})
  
    const { abv, category, city, country, ibu, name, state, coordinates } = req.body;
  
    const ProductAlreadyExists = await product.findOne({ name: req.body.name });
  
    if (ProductAlreadyExists)
      return res.status(400).json({ message: "Product arealdy exists" });
  
    const items = new product({
      abv,
      category,
      city,
      country,
      ibu,
      name,
      state,
      coordinates,
    });

    const savedItems = await items.save();
    res.status(201).json(savedItems);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
