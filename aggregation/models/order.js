var mongoose = require('mongoose')

var orderSchema = new mongoose.Schema({
    "orderId":String,
    "userId":String,
    "subtotal":String,
    "date":	String
})

    module.exports = mongoose.model(
        'Order', orderSchema);

  