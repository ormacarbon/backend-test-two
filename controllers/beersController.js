import beers from "../src/models/Beer.js";

class BeerController {

    static getBeers = (req, res) => {
        let limit = req.query.limit;
        if (!limit) {
            limit = 10;
        }

        beers.find((err, beers) => {
            res.status(200).json(beers)
        }).limit(limit);
    }

    static getBeerById = (req, res) => {
        const id = req.params.id;

        beers.findById(id, (err, beers) => {
            if (err) {
                res.status(400).send({ message: `${err.message} - Error while searching record, check if your id is right` })
            } else {
                res.status(200).send(beers)
            }
        })
    }

    static getBeerByName = (req, res) => {
        const name = req.query.name;

        beers.find({ 'name': name }, {}, (err, beers) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Error while searching record, check if the name is right` })
            } else if (beers.length === 0) {
                res.status(404).send({ message: `Record with name '${name}' not found` },)
            } else {
                res.status(200).send(beers)
            }
        })
    }

    static createBeer = (req, res) => {
        let beer = new beers(req.body);

        beer.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Error while registering record` })
            } else {
                res.status(201).send(beer.toJSON())
            }
        })
    }

    static updateBeer = (req, res) => {
        const id = req.params.id;

        beers.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Error while updating record` })
            } else {
                res.status(200).send({ message: 'Beer updated successfully' })
            }
        })
    }

    static deleteBeer = (req, res) => {
        const id = req.params.id;

        beers.findByIdAndDelete(id, (err, deletedBeer) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Error while deleting record, record not found` },)
            } else if (!deletedBeer) {
                res.status(404).send({ message: `Record with ID ${id} not found` },)
            } else {
                res.status(200).send({ message: 'Beer deleted successfully' })
            }
        })
    }
}

export default BeerController