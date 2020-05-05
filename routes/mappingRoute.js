const express = require('express');
const mappingController = require('../controllers/mappingController')

const router = express.Router();

router.get('/' , mappingController.getAllMapping)
router.post('/fournisseurs/:fournisseurId' , mappingController.addMapping)
router.get('/:mappingId' , mappingController.getOneMapping)


module.exports = router