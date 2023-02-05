import beerData from '../db.json'
import product from '../model/product'
import {Request,Response} from 'express'
import { IProduct } from '../types/types';

export const AllDataFromJson = async(req:Request,res:Response)=>{
    const request = beerData;
  let products = [];

  try {
    for (let item of request) {
      let json: IProduct = await product.create(item);
      products.push(json);
    }
    res.status(201).json({ message: products });
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "User is not defined" });
  }
}