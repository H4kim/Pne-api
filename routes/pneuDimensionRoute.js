const express = require('express');
const pneuDimensionCotroller = require('../controllers/pneuDimensionController')

const router = express.Router();

router.post('/' , pneuDimensionCotroller.addPneuDimension )
router.get('/' , pneuDimensionCotroller.getAllPneuDimension )
router.get('/:pneuDimId' , pneuDimensionCotroller.getOnePneuDimension )

module.exports = router