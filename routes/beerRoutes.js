const express = require('express');
const beerController = require('../controllers/beerControler');

const router = express.Router();

router
    .route('/')
    .get(beerController.getAllBeers)

router
    .route('/:id')
    .get(beerController.getBeer)


module.exports = router;