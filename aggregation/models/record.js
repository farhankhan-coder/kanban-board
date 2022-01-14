
var mongoose = require('mongoose')


var recordSchema = new  mongoose.Schema({
    amount: { type: Number, required: true },
    date: { type: Date, required: true },
    description: { type: String }
})

module.exports = mongoose.model(
        'record', recordSchema);

  