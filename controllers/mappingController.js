const Mapping = require('../models/mappingModal')
const Fournisseur = require('../models/fournisseurModal')
const pneuDimension = require('../models/pneuDimensionModal')
const TempoStock = require('../models/tempoStockModal')
const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/appError')

exports.addMapping = catchAsync(async (req,res,next) => {
    const mappingObj = {
        fournisseurId : req.params.fournisseurId,
        idPneuDimension : req.body.idPneuDimension,
        idTempoStock : req.body.idTempoStock
    }

    if(!await Fournisseur.findById(req.params.fournisseurId)) return next(new AppError('Invalid suplier ID', 404))
    if(!await pneuDimension.findById(req.body.idPneuDimension)) return next(new AppError('Invalid Pneu Dimension ID',404))
    if(!await TempoStock.findById(req.body.idTempoStock)) return next(new AppError('Invalid Tempo Stock ID',404))

    const mapping = await Mapping.create(mappingObj);

    res.status(200).json({
        status : 'success',
        mapping 
    })
}) 

exports.getAllMapping = catchAsync(async (req,res,next) => {
    const allMapping = await Mapping.find();

    res.status(200).json({
        status : 'success',
        allMapping
    })
})

exports.getOneMapping = catchAsync(async (req,res,next) => {
    const allMapping = await Mapping.findById(req.params.mappingId);

    res.status(200).json({
        status : 'success',
        allMapping
    })
})