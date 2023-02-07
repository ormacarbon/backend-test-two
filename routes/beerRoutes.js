const express = require('express');
const beerController = require('../controllers/beerControler');

const router = express.Router();

router
    .route('/')
    .get(beerController.getAllBeers)
    .post(beerController.createBeer)

router
    .route('/:id')
    .get(beerController.getBeer)
    .patch(beerController.updateBeer)

module.exports = router;