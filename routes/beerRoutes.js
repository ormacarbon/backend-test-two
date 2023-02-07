const express = require('express');
const beerController = require('../controllers/beerControler');

const router = express.Router();

router
    .route('/')
    .get(beerController.getAllBeers)



module.exports = router;