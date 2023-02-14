//  Dependencies
import mongoose from "mongoose"
//  Bank
import "../../schema/BeerList"
const BeerList = mongoose.model("BeerList")
//  Types
import { Request, Response } from "express"
import { IList } from "../../types"

//  Beer controller
export const bankController= {
    //  Get all list items
    getList: (req: Request, res: Response) => {
        BeerList.find()
        .sort({ date: "asc" })
        .then((list: IList[]) => {
            if(list.length === 0 ) res.status(400).send("please run http://localhost:3001/save-infos route with post method to populate the bank")
            else res.status(200).send(list)
        })
    },

    //  Takes the item to the edit page
    getEditItem: (req: Request, res: Response) => {
        const { _id } = req.body
        
        BeerList.findById(_id)
        .then(beer => {
            if(beer) res.status(200).send(beer)
            else res.status(400).send("There was an error to try get the beer, beer not found!")
            
        })
        .catch(error => res.status(400).send(error))

    },

    //  Create a new item
    newBeer: (req: Request, res: Response) => {
        let { name, category, country, state, city, address, x, y, website, description } = req.body
        x = x.replace(/\s/g, '')
        y = y.replace(/\s/g, '')
        const coordinates = [Number(x), Number(y)]
        const abv = Number(req.body.abv)
        const ibu = Number(req.body.ibu)
        const newBeer = {
            name, abv, ibu, category, country, state, city, address, coordinates, website, description
        }

        new BeerList(newBeer).save()
        .then(() => res.status(201).send("Beer created successfully!"))
        .catch((error: string) => res.status(400).send("There was an error to try create a new beer: " + error))
    },

    //  Save the edited item
    editItem: async (req: Request, res: Response) => {
        let  { name, category, country, state, city, address, x, y, website, description, _id } = req.body
        x = x.replace(/\s/g, '')
        y = y.replace(/\s/g, '')
        const coordinates = [Number(x), Number(y)]
        const abv = Number(req.body.abv)
        const ibu = Number(req.body.ibu)
        
        await BeerList.updateOne({_id: _id}, {
            name, abv, ibu, 
            category, country, state, 
            city, address, coordinates, 
            website, description
        })
        .then(() => res.status(200).send("successfully altered beer!"))
        .catch(error => res.status(200).send("There was an error to try edit a beer: " + error))
    },

    //  Remove a item
    removeBeer: (req: Request, res: Response) => {
        const id = req.params.id

        BeerList.findById(id)
        .then(beer => {
            if(beer) {
                BeerList.deleteOne(beer)
                .then(() => {
                    res.status(200).send("successfully deleted beer!")
                }).catch(error => res.status(400).send("There was an error to try delete a beer: " + error))                
            }
            else res.status(400).send("This beer don't exist")
        }).catch(error => res.status(400).send("There was an error to try delete a beer: " + error))
    }
}