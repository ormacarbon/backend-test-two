import { BeerProductDTO } from "../models/beerProductInterface";
import { Request, Response } from "express";
import { BeerProductBusiness } from "../business/beerProductBusiness";

export class BeerProductController {
  constructor(private beerBusiness: BeerProductBusiness) {}
  public importData = async (req: Request, res: Response) => {
    try {
      await this.beerBusiness.importData();
      res.status(201).send({ message: "Data imported successfully." });
    } catch (error: any) {
      res.status(error.statusCode || 400).send(error.message);
    }
  };
  public createProductRegister = async (req: Request, res: Response) => {
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
      } = req.body;
      const beer: BeerProductDTO = {
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
      };
      await this.beerBusiness.createProductRegister(beer);
      res.status(201).send({ message: "Product registered." });
    } catch (error: any) {
      res.status(error.statusCode || 400).send(error.message);
    }
  };

  public getAllProducts = async (req: Request, res: Response) => {
    try {
      const result = await this.beerBusiness.getAllProducts();
      res.status(201).send({ products: result });
    } catch (error: any) {
      res.status(error.statusCode || 400).send(error.message);
    }
  };

  public getProductById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const result = await this.beerBusiness.getProductById(id);
      res.status(201).send({ product: result });
    } catch (error: any) {
      res.status(error.statusCode || 400).send(error.message);
    }
  };

  public updateProduct = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await this.beerBusiness.updateProduct(id, req.body);
      res.status(200).send({ message: "Product updated" });
    } catch (error: any) {
      res.status(error.statusCode || 400).send(error.message);
    }
  };

  public deleteProduct = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await this.beerBusiness.deleteProduct(id);
      res.status(200).send({ message: "Product deleted" });
    } catch (error: any) {
      res.status(error.statusCode || 400).send(error.message);
    }
  };
}
