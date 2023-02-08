const express = require('express');
const globalErrorHandler = require('./controllers/errorController');


const beerRouter = require('./routes/beerRoutes');

const app = express();

//Body parser, reading data from body into req.body
app.use(express.json({limit: '10kb'}));
app.use('/api/beers', beerRouter);

app.use(globalErrorHandler)

module.exports = app;
