//  Dependencies
import mongoose from "mongoose"

const Schema = mongoose.Schema
const BeerList = new Schema({
    abv: {
        type: Number,
        require: true,
    },
    address: {
        type: String,
        require: false
    },
    category: {
        type: String,
        require: false
    },
    city: {
        type: String,
        require: true
    },
    coordinates: {
        type: [Number],
        require: false
    },
    country: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: false
    },
    ibu: {
        type: Number,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    state: {
        type: String,
        require: false
    },
    website: {
        type: String,
        require: false
    },
    date: {
        type: Date, 
        default: Date.now
    }
})
mongoose.model("BeerList", BeerList)
