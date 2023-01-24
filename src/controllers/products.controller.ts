import { Request, Response } from "express";

import { Product } from "../models/products.model";
import { IProduct } from "../types/products.types";

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const response = await Product.find({});
    res.status(200).json({ message: response });
  } catch (err) {
    res.status(500).json({ message: err });
  }
}

const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const response = await Product.findOne({
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

const postProduct = async (req: Request, res: Response) => {
  const request: IProduct = {
    ...req.body
  };

  try {
    if (!request.name) throw new Error();
    const response = await Product.create({ ...request });
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


