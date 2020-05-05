const mongoose = require('mongoose');

const mappingSchema = new mongoose.Schema({
    fournisseurId : {
        type : mongoose.Schema.ObjectId,
        ref : 'Fournisseur',
        required : [true , 'mapping must have a Suplier id']
    },
    idPneuDimension : {
        type : mongoose.Schema.ObjectId,
        ref : 'PneuDimension',
        required : [true , 'mapping must have a Pneu dimension id']
    },
    idTempoStock : {
        type : mongoose.Schema.ObjectId,
        ref : 'TempoStock',
        required : [true , 'mapping must have a Temporary stock id']
    },
})


const Mapping = mongoose.model('Mapping' , mappingSchema)

module.exports = Mapping