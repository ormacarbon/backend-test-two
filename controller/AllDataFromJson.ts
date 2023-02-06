import beerData from '../db.json'
import product from '../model/product'
import {Request,Response} from 'express'
import { IProduct } from '../types/types';

export const AllDataFromJson = async(req:Request,res:Response)=>{
    const data = beerData;
  let beers = [];

  try {
    for (let item of data) {
      let json: IProduct = await product.create(item);
      beers.push(json);
    }
    res.status(201).json(beers);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}