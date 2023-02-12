const mongoose = require('mongoose');

async function startDB(){
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect('mongodb+srv://rodrigorosa:a1b2c3d4e5@cluster0.dhzx4sx.mongodb.net/test');
        console.log('conected to db'); 
    } catch (error) {
        console.log(`erro: ${error}`);
    }
}

module.exports = startDB;