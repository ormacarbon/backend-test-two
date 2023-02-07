import { Response, Request } from "express";
import { Product } from "../../models/products.model";

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const products = await Product.updateOne(
      { _id: id },
      { ...req.body }
    );
    if (!products.acknowledged) {
      throw new Error();
    }
    res.status(200).json({ message: "Successfully updated" });
  } catch (err) {
    res.status(500).json({ message: "Error update" });
  }
}