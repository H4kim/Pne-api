const mongoose = require('mongoose');

const pneuDimensionSchema = new mongoose.Schema({
    designation : {
        type : String,
        required : true,
        unique : true
    },
    marque : {
        type : String,
        required : true
    },
    collect : {
        type : String,
        required : true
    },
    type : {
        type : String,
        required : true
    },
    largeur : {
        type : String,
        required : true
    },
    hauteur : {
        type : String,
        required : true
    },
    diametre : {
        type : String,
        required : true
    },
    charge : {
        type : String,
        required : true
    },
    vitesse : {
        type : String,
        required : true
    },
    marge : {
        type : String,
        required : true
    },
    
})


const PneuDimension = mongoose.model('PneuDimension' , pneuDimensionSchema)

module.exports = PneuDimension
