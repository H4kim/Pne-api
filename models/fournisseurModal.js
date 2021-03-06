const mongoose = require('mongoose');

const fourniseurSchema = new mongoose.Schema({
    name : {
        type: String,
        required : [true , 'A fournisseur must have a name'],
        minlength : 3
    },
    phone : String,
    address : String,
}, {
    toJSON : {virtuals : true},
    toObject : {virtuals : true}
})

// populate all tempoStock for one fournisseur (parent refferencing in tempStock)
fourniseurSchema.virtual('Stocks' , {
    ref : 'Stock',
    localField : '_id',
    foreignField : 'fournisseurId'
})



const Fournisseur = mongoose.model('Fournisseur' , fourniseurSchema)

module.exports = Fournisseur