import { Response, Request } from "express";
import { Product } from "../../models/products.model";

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const response = await Product.deleteOne({
      _id: id
    });
    if (response.deletedCount === 0) throw new Error();
    res.status(200).json({ message: response });
  } catch (err) {
    res.status(500).json({ message: "Unable to delete user" });
  }
}
