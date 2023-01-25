import { Response, Request } from "express";
import { Product } from "../../models/products.model";
import { IProduct } from "../../types/products.types";

export const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const response: IProduct = await Product.findOne({
      _id: id
    });
    res.status(200).json({ message: response });
  } catch (err) {
    res.status(500).json({ message: "No user found" });
  }
}
