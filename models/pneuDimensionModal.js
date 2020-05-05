const mongoose = require('mongoose');

const pneuDimensionSchema = new mongoose.Schema({
    Designation : {
        type : String,
        required : true,
        unique : true
    },
    Marque : {
        type : String,
        required : true
    },
    Collection : {
        type : String,
        required : true
    },
    Type : {
        type : String,
        required : true
    },
    Largeur : {
        type : String,
        required : true
    },
    Hauteur : {
        type : String,
        required : true
    },
    Diametre : {
        type : String,
        required : true
    },
    Charge : {
        type : String,
        required : true
    },
    Vitesse : {
        type : String,
        required : true
    },
    Marge : {
        type : String,
        required : true
    },
    
})


const PneuDimension = mongoose.model('PneuDimension' , pneuDimensionSchema)

module.exports = PneuDimension
