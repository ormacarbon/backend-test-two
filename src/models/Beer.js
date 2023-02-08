import mongoose from "mongoose";

const beerSchema = new mongoose.Schema(
    {
        id: {type: mongoose.ObjectId},
        abv: {type: Number, required: true},
        address: {type: String},
        category: {type: String},
        city: {type: String, required: true},
        coordinates: {type: Array, required: true},
        country: {type: String, required: true},
        ibu: {type: Number, required: true},
        name: {type: String, required: true},
        state: {type: String, required: true},
        website: {type: String}
    }
)

const beers = mongoose.model('beers', beerSchema)

export default beers;