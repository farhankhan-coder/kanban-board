var mongoose = require('mongoose')

var companySchema = new mongoose.Schema({
   "name":String,
   "gender":String,
   "age":String,
   "salary":String,
   "position":String
})

    module.exports = mongoose.model(
        'Company', companySchema);

  