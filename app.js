const express = require('express');


const beerRouter = require('./routes/beerRoutes');

const app = express();

//Body parser, reading data from body into req.body
app.use(express.json({limit: '10kb'}));



app.use('/api/beers', beerRouter);


module.exports = app;
