//  Dependencies
import mongoose from "mongoose"
//  Types
import { Request, Response } from "express"
import { IList } from "../../types"
//  Bank
import "../../schema/BeerList"
const BeerList = mongoose.model("BeerList")
//  Json
import jsonList from "../../../../db.json"

//  Populate the bank with json data
export const populateBankController= {
    populateBank: (req: Request, res: Response) => {
        BeerList.find()
            .then((list: IList[]) => {
            if(list.length !== 0) res.status(400).send("The bank already populated!") 
            else {
                jsonList.forEach(item => {
                    new BeerList(item)
                    .save()
                    .catch((error: string) => console.log(error))
                })
                res.status(201).send("Created bank data with success!")
            }
        })
    }
}