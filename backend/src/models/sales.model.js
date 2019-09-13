const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId;

const salesSchema = new Schema({
    employee_id: {type: ObjectId, required: true},
    carmodel_id: {type: ObjectId, required: true},
}, {
    timestamps: true
})

const Sales = mongoose.model('Sales', salesSchema)
module.export = Sales