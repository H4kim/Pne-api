const express = require('express');
const tempoStockController = require('../controllers/tempoStockController')

const router = express.Router();

router.route('/fournisseurs/:fournisseurId')
    .get(tempoStockController.getAllTempoStock) // fire in the mapping search
    .post(tempoStockController.addTempoStock) //fire in add Stock 

module.exports = router