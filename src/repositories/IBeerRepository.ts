import { Beer } from "../models/Beer";

interface IBeerRepository {

    insertOne({abv,address,category,city,coordinates,country,description,ibu,name,state,website}:Beer):Promise<void>;
    find():any;
    findOne(id:string):any;
    deleteOne(id:string):any;
    updateOne(id: string, { abv, address, category, city, coordinates, country, description, ibu, name, state, website }: Beer):any;

}

export { IBeerRepository }