import beers from "../src/models/Beer.js";

class BeerController {

    static getBeers = (req, res) => {
        beers.find((err, beers) => {
            res.status(200).json(beers)
        }).limit(10);
    }

}

export default BeerController