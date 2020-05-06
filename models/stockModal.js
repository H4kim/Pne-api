const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    productName : {
        type : String,
        required : [true , 'Product must have a name']
    },
    quantity : {
        type : Number,
        required : [true , 'Product must have a quantity']
    },
    price : {
        type : Number,
        required : [true , 'Product must have a price']
    },
    fournisseurId : {
        type : mongoose.Schema.ObjectId,
        ref : 'Fournisseur',
        required : [true , 'Product must have a suplier ID']
    },
    idPneuDim : {
        type : String,
        default : ''
    }
})


const Stock = mongoose.model('Stock' , stockSchema)

module.exports = Stock