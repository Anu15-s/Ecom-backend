const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    products:[
        {
            type:mongoose.Schema.ObjectId,
            ref:"Product"
        }
    ],totoal:{
        type:Number
    }

})

const Cart = mongoose.model('Cart',cartSchema);
module.exports = {Cart};