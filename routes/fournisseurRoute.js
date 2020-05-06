const express = require('express');
const fournisseurController = require('../controllers/fournisseurController')

const router = express.Router();

router.route('/')
    .get(fournisseurController.getAllFournisseurs) 
    .post(fournisseurController.addFournisseur) 
    
router.route('/:fournisseurId')
    .get(fournisseurController.getOneFournisseur) 
    .delete(fournisseurController.deleteFournisseur) 
    .patch(fournisseurController.updateFournisseur) 



module.exports = router