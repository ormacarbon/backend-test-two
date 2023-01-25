import { Response, Request } from "express";
import { Product } from "../../models/products.model";
import { IProduct } from "../../types/products.types";

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const response: IProduct[] = await Product.find({});
    res.status(200).json({ message: response });
  } catch (err) {
    res.status(500).json({ message: err });
  }
}
