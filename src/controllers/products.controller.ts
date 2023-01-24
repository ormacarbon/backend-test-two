import { Request, RequestHandler, Response } from "express";

import { Product } from "../models/products.model";
import { IProduct } from "../types/products.types";
import * as yup from "yup";
import { validation } from "../shared/middlewares/validation";

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const response: IProduct[] = await Product.find({});
    res.status(200).json({ message: response });
  } catch (err) {
    res.status(500).json({ message: err });
  }
}

const getProduct = async (req: Request, res: Response) => {
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

const deleteProduct = async (req: Request, res: Response) => {
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

const bodyValidation: yup.SchemaOf<IProduct> = yup.object().shape({
  id: yup.string().min(3),
  abv: yup.number().required(),
  category: yup.string().required().min(3),
  city: yup.string().required().min(3),
  coordinates: yup.array(),
  country: yup.string().required().min(3),
  ibu: yup.number().required(),
  name: yup.string().required().min(3),
  state: yup.string().required().min(3),
});

export const createBodyValidation = validation("body", bodyValidation);

const postProduct = async (req: Request<{}, {}, IProduct>, res: Response) => {
  try {
    const response = await Product.create({ ...req.body });
    res.status(201).json({ message: response });
  } catch (err) {
    res.status(500).json({ message: "Unable to create user" });
  }
}

// const postProducts = async (req: Request, res: Response) => {
//   const request: IProduct[] = productsJson;
//   let response = [];

//   try {
//     for (let item of request) {
//       let json = await Product.create(item);
//       response.push(json);
//     }
//     res.status(201).json({ message: response });
//   } catch (err) {
//     res.status(500).json({ message: "User is not defined" });
//   }
// }

export {
  getAllProducts,
  getProduct,
  deleteProduct,
  postProduct,
};

// TODO: GET, POST, DELETE ✅
// TODO: PUT
// TODO: Retornar um erro na criação de produtos com dados imcompletos


