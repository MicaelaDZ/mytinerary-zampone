const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    name:{type:String, required: true}, 
    country:{type:String, required:true},//si es obligatorio o no
    src:{type:String, required: true},
    description:{type: String},
    comments:{type:String}
})

const City = mongoose.model("city", citySchema )

module.exports = City;