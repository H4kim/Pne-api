const Stock = require('../models/stockModal')
// const PneuDimension = require('../models/pneuDimensionModal')
// const Fournisseur = require('../models/fournisseurModal')
const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/appError')


exports.getFournisseurProduct = catchAsync(async(req,res,next) => {

    const products = await Stock.find({fournisseurId : req.params.fournisseurId , 'mapped.isMapped' : true}).populate('mapped.idPneuDim');

    res.status(200).json({
        status: 'success',
        products
    })
})

exports.getAllProduct = catchAsync(async(req,res,next) => {
    const products = await Stock.find({'mapped.isMapped' : true}).populate('mapped.idPneuDim');;

    res.status(200).json({
        status: 'success',
        products
    })
})

exports.getOneProduct = catchAsync(async(req,res,next) => {
    const product = await Stock.find({_id : req.params.productId ,'mapped.isMapped' : true}).populate('mapped.idPneuDim');;

    res.status(200).json({
        status: 'success',
        product
    })
})