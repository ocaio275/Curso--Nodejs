const mongoose = require('mongoose')
const { Schema } = mongoose

const Product = mongoose.model(
    'Product',
    new Schema({
        name: { type: String, require: true },
        price: { type: Number, require: true },
        descript: { type: String, require: true },
        image: { type: String, require: true }
    })
)
module.exports = mongoose