
var mongoose = require('mongoose')

// Account Schema
var accountSchema = new mongoose.Schema ({
    name: { type: String, required: true },
    currency: { type: String, required: true },
    created: { type: Date, default: Date.now },
    records: [Record]
});

    module.exports = mongoose.model(
        'Account', accountSchema);

  