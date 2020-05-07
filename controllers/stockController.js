const Stock = require('../models/stockModal')
const Fournisseur = require('../models/fournisseurModal')
const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/appError')

exports.addStock = catchAsync(async(req,res,next) => {
    const tempObj = {
        fournisseurId : req.params.fournisseurId,
        productName : req.body.productName,
        quantity : req.body.quantity,
        price : req.body.price
    }

    const fournisseur = await Fournisseur.findById(req.params.fournisseurId)

    if (!fournisseur)  return next(new AppError('No suplier with this id' , 400))

    const stock = await Stock.create(tempObj)

    res.status(200).json({
        status : 'success',
        stock
    })
})

exports.getAllStock = catchAsync(async(req,res,next) => {
    const stock = await Stock.find({'mapped.isMapped' : false })
    console.log(stock)
    
    res.status(200).json({
        status: 'success',
        stock
    })
})

exports.getFournisseurStocks = catchAsync(async(req,res,next) => {
    const stock = await Stock.find({fournisseurId : req.params.fournisseurId , 'mapped.isMapped' : false});

    res.status(200).json({
        status: 'success',
        stock
    })
})


exports.deleteOneStock = catchAsync(async(req,res,next) => {
    const stock = await Stock.findByIdAndDelete(req.params.stockId);

    if(!stock) return next(new AppError('Somthing went wrong'))

    res.status(200).json({
        status: 'success',
        message: 'stock deleted successfully :( '
    })
})

// needed in add mapping 
exports.updateStock = catchAsync(async(req,res,next) => {
    
    req.body.mapped = {}
    req.body.mapped.isMapped = true
    req.body.mapped.idPneuDim = req.body.idPneuDim
    
    console.log(req.body)
    const stock = await Stock.findByIdAndUpdate(req.params.stockId , req.body , {
        runValidators : true,
        new : true
    });

    if(!stock) return next(new AppError('Somthing went wrong'))


    res.status(200).json({
        status: 'success',
        stock
    })
})

