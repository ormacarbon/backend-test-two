import { IdGenerator } from "../services/idGenerator";
import BeerProduct from "../models/beerProductModel";
import {
  MissingCredentials,
  ProductExists,
  ProductNotFound,
} from "../error/handleError";
import { BeerProductDTO } from "../models/beerProductInterface";
import fs from "fs";
export class BeerProductBusiness {
  constructor(private idGenerator: IdGenerator) {}
  // @desc   Import store data from db.json to the new database.
  // @route   POST /import-data
  public importData = async () => {
    const data: BeerProductDTO[] = JSON.parse(
      fs.readFileSync("..//db.json", "utf-8")
    );
    try {
      await BeerProduct.create(data);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  // @desc    Register new product
  // @route   POST /register
  public createProductRegister = async (input: BeerProductDTO) => {
    try {
      const {
        abv,
        address,
        category,
        city,
        coordinates,
        country,
        description,
        ibu,
        name,
        state,
        website,
      } = input;

      if (!abv || !name || !ibu || !country) {
        throw new MissingCredentials();
      }

      const productExist = await BeerProduct.findOne({ name });

      //for future controls, it is important that each product has a unique name.
      if (productExist) {
        throw new ProductExists();
      }

      const id = this.idGenerator.generateId();

      await BeerProduct.create({
        id,
        abv,
        address,
        category,
        city,
        coordinates,
        country,
        description,
        ibu,
        name,
        state,
        website,
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  // @desc    Get all products
  // @route   Get /get-products
  public getAllProducts = async () => {
    try {
      const result = await BeerProduct.find();
      return result;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  // @desc    Get product by id
  // @route   Get /get-product/:id
  public getProductById = async (param: string) => {
    try {
      const id = param;
      const result = await BeerProduct.findById(id);
      return result;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  // @desc    Update product
  // @route   Put /update-product/:id
  public updateProduct = async (param: string, input: BeerProductDTO) => {
    try {
      const id = param;
      const product = await BeerProduct.findById(id);

      if (!product) {
        throw new ProductNotFound();
      }

      await BeerProduct.findByIdAndUpdate(id, input, { new: true });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  // @desc    Delete product
  // @route   Delete /delete-product/:id
  public deleteProduct = async (param: string) => {
    try {
      const id = param;
      const product = await BeerProduct.findById(id);

      if (!product) {
        throw new ProductNotFound();
      }
      await BeerProduct.findByIdAndRemove(id);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
