const PneuDimension = require('../models/pneuDimensionModal')
const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/appError')



exports.addPneuDimension = catchAsync(async(req,res,next) => {
    const pneuDim = await PneuDimension.create(req.body)

    res.status(200).json({
        status : 'Success',
        pneuDimension : pneuDim
    })
})

exports.getAllPneuDimension = catchAsync(async(req,res,next) => {
    const pneuDim = await PneuDimension.find()

    res.status(200).json({
        status : 'Success',
        pneuDimension : pneuDim
    })
})

exports.getOnePneuDimension = catchAsync(async(req,res,next) => {
    const pneuDim = await PneuDimension.findById(req.params.pneuDimId)

    res.status(200).json({
        status : 'Success',
        pneuDimension : pneuDim
    })
})