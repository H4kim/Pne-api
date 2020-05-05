const express = require('express');
const pneuDimensionCotroller = require('../controllers/pneuDimensionController')

const router = express.Router();

router.get('/' , pneuDimensionCotroller.getAllPneuDimension )
router.get('/:pneuDimId' , pneuDimensionCotroller.getOnePneuDimension )
router.post('/' , pneuDimensionCotroller.addPneuDimension )

module.exports = router