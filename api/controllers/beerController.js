const { Op } = require('sequelize')
const database = require('../models')

class BeerController {

    static async getAllBeers(req, res) {
        try {
            const allBeers = await database.Beer.findAll()
            return res.status(200).json(allBeers)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    } 

    static async getOneBeerByID(req,res){
        const { id } = req.params
        try{
            const beer = await database.Beer.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(beer)
        }
        catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async getOneBeerByABV(req,res){
        const { abv } = req.params
        try{
            const beer = await database.Beer.findOne({
                where: {
                    abv: Number(abv)
                }
            })
            return res.status(200).json(beer)
        }
        catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async getOneBeerByIBU(req,res){
        const { ibu } = req.params
        try{
            const beer = await database.Beer.findOne({
                where: {
                    ibu: Number(ibu)
                }
            })
            return res.status(200).json(beer)
        }
        catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async createBeer(req, res) {
        const newBeer = req.body
        try {
            const newBeerCreated = await database.Beer.create(newBeer)
            return res.status(201).json(newBeerCreated)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateBeer(req, res) {
        const { id } = req.params
        const newData = req.body
        try {
            await database.Beer.update(newData, {
                where: {
                    id: Number(id)
                }
            })  
            const beerUpdated = await database.Beer.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(beerUpdated)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteBeer(req, res) {
        const { id } = req.params
        try {
            await database.Beer.destroy({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({
                mensagem: `successfully deleted beer with id:  ${id} `
            })
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = BeerController
