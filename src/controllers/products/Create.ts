import { Request, Response } from "express";
import * as yup from "yup";

import { Product } from "../../models/products.model";
import { IProduct } from "../../types/products.types";
import { validation } from "../../shared/middlewares/validation.middleware";

const bodyValidation: yup.SchemaOf<IProduct> = yup.object().shape({
  id: yup.string().min(3),
  abv: yup.number().required(),
  category: yup.string().min(3),
  city: yup.string().required().min(3),
  coordinates: yup.array(),
  description: yup.string(),
  country: yup.string().required().min(3),
  ibu: yup.number().required(),
  name: yup.string().required().min(3),
  state: yup.string().required(),
  website: yup.string()
});

const createBodyValidation = validation("body", bodyValidation);

const postProduct = async (req: Request<{}, {}, IProduct>, res: Response) => {
  try {
    const response = await Product.create({ ...req.body });
    res.status(201).json({ message: response });
  } catch (err) {
    res.status(500).json({ message: "Unable to create user" });
  }
}

export {
  postProduct,
  createBodyValidation
};