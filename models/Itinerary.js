const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema({
  itineraryName: { type: String, required: true },
  userName: { type: String, required: true },
  userImg: { type: String, required: true },
  price: { type: Number, required: true },
  likes: { type: []},
  duration: { type: Number, default: 0 },
  hashtags: { type: [] },
  comments: [{
    comment: {type:String, required:true},
    userId: {type:mongoose.Types.ObjectId, required:true, ref:"user"}
  }],
  city: { type: [{ type: mongoose.Types.ObjectId, ref: "city" }] }
});

const Itinerary = mongoose.model("itinerary", itinerarySchema);

module.exports = Itinerary;
