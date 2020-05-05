const Fournisseur = require('../models/fournisseurModal')
const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/appError')

exports.getAllFournisseurs = catchAsync(async (req,res,next) => {

    const fournisseurs = await Fournisseur.find().populate({
        path : 'tempStocks'
    })

    res.status(200).json({
        status : 'success',
        data : {
            fournisseurs
        }
    })
})   

exports.addFournisseur =  catchAsync(async (req,res,next) => {
    const fournisseur = await Fournisseur.create(req.body)
    
    res.status(200).json({
        status : 'success',
        fournisseur
    })

})   

exports.updateFournisseur = catchAsync(async (req,res,next) => {
        const fournisseur = await Fournisseur.findByIdAndUpdate(req.params.id, req.body , {runValidators : true , new:true})
        
        if(!fournisseur) return next(new AppError('No suplier with this id' , 404))
        
        res.status(200).json({
            status : 'success',
            data : {
                fournisseur
            }
        })
    
})

exports.deleteFournisseur = catchAsync(async (req,res,next) => {
    const fournisseur = await Fournisseur.findByIdAndDelete(req.params.id)

    if(!fournisseur) return next(new AppError('No suplier with this id' , 404))


    res.status(200).json({
        status : 'success',
        message : 'Fournisseur deleted'
    })
})   