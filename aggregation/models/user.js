var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    "userId":String,
    "name":	String,
    "order" : [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Order"
        }
      ]
})

    module.exports = mongoose.model(
        'User', userSchema);

  