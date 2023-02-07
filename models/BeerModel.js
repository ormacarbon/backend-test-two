const mongoose = require('mongoose');


const beerSchema = new mongoose.Schema({
    name:{
      type:String,
      required:[true, "A Beer must have a name"]
    },
    abv: {
      type: Number,
      required:[true, 'A Beer must have IBV'],
    },
    address:{
      type:String,
      required:[true, "A Beer must have a fabric location"]
    },
    category:{
      type:String,
      required:[true, "A Beer must have a city"] 
    },
    coordinates:[Number],
    country: String,
    description:{
      type:String,
      required:false
    },
    ibu:{
      type:Number,
      required:[true, "A Beer must have a IBU"]
    },
    state:{
      type:String,
      required:[true, "A Beer must have a State of origin"]
    },
    website:{
      type:String,
      required:false
    }


},
{
    toJSON: { virtuals: true },
    toObject: {vitruals: true}
}

);

beerSchema.index({name:1});
beerSchema.index({startLocation: '2dsphere'})

const Beer = mongoose.model('Beer', beerSchema);

module.exports = Beer;