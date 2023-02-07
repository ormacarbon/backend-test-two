const mongoose = require('mongoose');
const app = require('./app');
const dotenv = require('dotenv');



dotenv.config({path: './config.env'});

const port = process.env.PORT || 3000;

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.set('strictQuery', false);

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log(`Connection established`))
