const mongoose = require('mongoose');

const tempoStockSchema = new mongoose.Schema({
    productNameSuplier : {
        type : String,
        required : [true , 'Product must have a name in the suplier stock']
    },
    quantityInSuplier : {
        type : Number,
        required : [true , 'Product must have a quantity in the suplier stock']
    },
    priceOfSuplier : {
        type : Number,
        required : [true , 'Product must have a price of the suplier']
    },
    fournisseur : {
        type : mongoose.Schema.ObjectId,
        ref : 'Fournisseur',
        required : [true , 'Product must have a suplier ID']
    }
})


const TempoStock = mongoose.model('TempoStock' , tempoStockSchema)

module.exports = TempoStock