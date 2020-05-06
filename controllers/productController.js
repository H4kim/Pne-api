const Stock = require('../models/stockModal')
const Fournisseur = require('../models/fournisseurModal')
const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/appError')


exports.getFournisseurProduct = catchAsync(async(req,res,next) => {
    const products = await Stock.find({fournisseurId : req.params.fournisseurId , idPneuDim : {$ne : ''} });

    res.status(200).json({
        status: 'success',
        products
    })
})

exports.getAllProduct = catchAsync(async(req,res,next) => {
    const products = await Stock.find({idPneuDim : {$ne : ''} });

    res.status(200).json({
        status: 'success',
        products
    })
})