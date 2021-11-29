const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    name:{type:String, required: true}, 
    
})

const Activity = mongoose.model("activity", activitySchema )

module.exports = Activity;