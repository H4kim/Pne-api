const express = require('express');
const stockController = require('../controllers/stockController')
const productController = require('../controllers/productController')
const router = express.Router();


router.get('/', stockController.getAllStock)

router.route('/fournisseurs/:fournisseurId')
    .get(stockController.getFournisseurStocks) 
    .post(stockController.addStock) 

router.route('/:stockId')
    .delete(stockController.deleteOneStock)
    .patch(stockController.updateStock)


module.exports = router