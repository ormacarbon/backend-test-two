//  Dependencies
import express from "express"
//  Controllers
import { bankController, populateBankController } from "../controllers"
import { beerValidation } from "../middleware"

const router = express.Router()

//  Pages
//  Get
router.get("/list", bankController.getList)
//  Post
router.post("/newBeer", beerValidation.beer, bankController.newBeer)
router.post("/itemToEdit", bankController.getEditItem)
//  Delete
router.delete("/remove/:id", bankController.removeBeer)
//  Put
router.put("/editedBeer", beerValidation.beer, bankController.editItem)

//  Route to populate the bank
router.post("/save-infos", populateBankController.populateBank)

export default router