import { ObjectId } from "mongodb";
import { connect, disconnect } from "../config/database/database";
import { ApplicationError } from "../error/ApplicationError";
import { Beer } from "../models/Beer";
import { IBeerRepository } from "./IBeerRepository";


export class BeerRepository implements IBeerRepository {

    async insertOne({ abv, address, category, city, coordinates, country, description, ibu, name, state, website }: Beer) {
        try {

            const database = await connect();
            await database.collection("beers").insertOne({ abv, address, category, city, coordinates, country, description, ibu, name, state, website })

            console.log("BEER CREATED");
        } catch (err) {

            console.log(err)
            disconnect();
            throw new ApplicationError("Something wrong happened", 500);
        }

    }

    async find() {
        try {

            const database = await connect();
            const beers = await database.collection(process.env.DATABASE_COLLECTION).find({}).toArray();

            return beers;
        } catch (err) {

            console.log(err)
            disconnect();
            throw new ApplicationError("Something wrong happened", 500);
        }

    }

    
    async findOne(id: string) {
        try {

            const database = await connect();
            const beer = await database.collection("beers").findOne({ _id: new ObjectId(id) });

            return beer;
        } catch (err) {

            console.log(err)
            disconnect();
            throw new ApplicationError("Something wrong happened", 500);
        }

    }


    deleteOne(id: string) {
        throw new Error("Method not implemented.");
    }
    updateOne(id: string, { abv, address, category, city, coordinates, country, description, ibu, name, state, website }: Beer) {
        throw new Error("Method not implemented.");
    }

}