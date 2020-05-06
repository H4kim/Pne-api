const express = require('express');
// const stockController = require('../controllers/stockController')
const productController = require('../controllers/productController')

const router = express.Router();

//get all mapped product 
router.get('/' ,  productController.getAllProduct)

//get all mapped product from one fournisseur
router.get('/fournisseurs/:fournisseurId' , productController.getFournisseurProduct)




module.exports = router