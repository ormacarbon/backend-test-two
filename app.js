const express = require('express');


const beerRouter = require('./routes/beerRoutes');

const app = express();


app.use('/api/beers', beerRouter);


module.exports = app;
