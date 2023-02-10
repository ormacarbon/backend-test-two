const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Beer = require('./../models/BeerModel');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.set('strictQuery', false);


mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log('DB connection successful!'));

// READ JSON FILE
const beers = JSON.parse(fs.readFileSync(`${__dirname}/db.json`, 'utf-8'));

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Beer.create(beers);
    console.log('Data successfully loaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Beer.deleteMany();
    console.log('Data successfully deleted!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}