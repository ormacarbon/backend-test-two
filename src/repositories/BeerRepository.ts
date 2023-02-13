import { connect, disconnect } from "../config/database/database";
import { Beer } from "../models/Beer";
import { IBeerRepository } from "./IBeerRepository";


export class BeerRepository implements IBeerRepository{
    insertOne({ abv, address, category, city, coordinates, country, description, ibu, name, state, website }: Beer): Promise<void> {
        throw new Error("Method not implemented.");
    }
  
    async find() {
        try {

            const database = await connect();
            const beers = await database.collection("beers").find({}).toArray();

            return beers;
        } catch (err) {

            console.log(err)
            disconnect();
            throw new Error("Something wrong happened");
        }

    }
    findOne(id: string) {
        throw new Error("Method not implemented.");
    }
    deleteOne(id: string) {
        throw new Error("Method not implemented.");
    }
    updateOne(id: string, { abv, address, category, city, coordinates, country, description, ibu, name, state, website }: Beer) {
        throw new Error("Method not implemented.");
    }

}