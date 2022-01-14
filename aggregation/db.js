var mongoose = require('mongoose')
var schema = mongoose.Schema

var personSchema = new mongoose.Schema({
    "person_id": mongoose.Types.ObjectId,
    "firstname": String,
    "lastname": String,
    "dateofbirth": Date,
    "vocation": String,
    "address": { 
        "number": String,
        "street": String,
        "city": String
    }
})

    module.exports = mongoose.model(
        'Persons', personSchema);

  