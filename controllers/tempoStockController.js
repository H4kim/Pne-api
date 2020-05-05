const TempoStock = require('../models/tempoStockModal')
const Fournisseur = require('../models/fournisseurModal')
const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/appError')

exports.addTempoStock = catchAsync(async(req,res,next) => {
    const tempObj = {
        fournisseur : req.params.fournisseurId,
        productNameSuplier : req.body.productNameSuplier,
        quantityInSuplier : req.body.quantityInSuplier,
        priceOfSuplier : req.body.priceOfSuplier
    }

    const fournisseurID = await Fournisseur.findById(req.params.fournisseurId)

    if (!fournisseurID)  return next(new AppError('No suplier with this id' , 400))

    const tempoStock = await TempoStock.create(tempObj)

    res.status(200).json({
        status : 'success',
        tempoStock
    })
})

exports.getAllTempoStock = catchAsync(async(req,res,next) => {
    const tempoStock = await TempoStock.find().populate({path :'fournisseur' , select : 'name'});
    
    res.status(200).json({
        status: 'success',
        tempoStock
    })
})