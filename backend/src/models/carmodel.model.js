const mongoose = require('mongoose')
const Schema = mongoose.Schema

const carmodelSchema = new Schema({
    brand: {type: String, required: true},
    model: {type: String, required: true},
    price: {type: Number, required: true}
}, {
    timestamps: true
})

const Carmodel = mongoose.model('Carmodel', carmodelSchema)
module.exports = Carmodel;