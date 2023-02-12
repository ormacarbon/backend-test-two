const BeerModel = require('../Models/BeerModel');

class BeerController{
    async create(req, res){
        try {
            const{ abv, category, city, country, ibu, name, state } = req.body;
            if(!abv || !category || !city || !country || !ibu || !name || !state )
            {
                return res.status(400).json({message: 'The abv, category, city, country, ibu, name and state fields are required'})
            }

            const beerAlreadyExists = await BeerModel.findOne({name : name});
            
            if(beerAlreadyExists){
                return res.status(400).json({message: 'Beer already exists'})
            }

            const createdBeer = await BeerModel.create(req.body) 
            return res.status(200).json(createdBeer);


        } catch (error) {
            return res.status(404).json({message: 'Error creating beer'});
        }
    }
    async index(req, res){
        try {
            const beers = await BeerModel.find();
            return res.status(200).json(beers);
        } catch (error) {
            return res.status(404).json({message: 'Beers not found'});   
        }
        
    }
    async read(req, res){
        try {
            const { id } = req.params
            const beer = await BeerModel.findById(id); 
            if(!beer){
                return res.status(404).json({message: 'Beer not found'})
            }
            return res.status(200).json(beer);
        } catch (error) {
            return res.status(404).json({message: "Failed to find beer"})
        }
    } 
    async update(req, res){
        try {
            const { id } = req.params;
            const beer = await BeerModel.findByIdAndUpdate(id, req.body, {new: true});

            if(!beer){
                return res.status(404).json({message: 'Failed to find beer'})
            }

            return res.status(200).json(beer);

        } catch (error) {
            return res.status(404).json({message: 'Failed to update beer'})
        }
        

    }
    async delete(req, res){
        try {
            const { id } = req.params;
            const beerDeleted = await BeerModel.findByIdAndDelete(id);
            if(!beerDeleted){
                return res.status(404).json({message: 'Failed to find beer'});
            }
            return res.status(200).json(beerDeleted);

        } catch (error) {
            return res.status(404).json({message: 'Failed to delete beer'})
        }
    }
   
}

module.exports = new BeerController();