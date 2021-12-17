const Itinerary = require("../models/Itinerary")

const itineraryController = {
  returnItineraries: (req, res) => {
    Itinerary.find()
      .populate("city") 
      .then((response) => res.json({response}))
  },
  returnItinerary: (req, res) => {
    Itinerary.findOne({_id: req.params.id})
    .then((response) => {res.json({response})})
  },
  returnItinerariesByCity: (req, res) => {
    Itinerary.find({city: {_id: req.params.city}}) 
      .populate("city")
      .then((response) => {
        res.json({response})
      })
      .catch((err) => console.log(err))
  },
  createItinerary: (req, res) => {
    const {
      itineraryName,
      userName,
      userImg,
      price,
      likes,
      duration,
      hashtags,
      comments,
      city,
    } = req.body
    const itinerary = new Itinerary({...req.body}).save()
      .then((response) => res.json({response: {itinerary}}))
      .catch((err) => console.log(err))
  },
 
  modifyItinerary: (req, res) => {
    Itinerary.findOneAndUpdate({_id: req.params.id}, {...req.body})
      .then((response) => res.json({response}))
      .catch((err) => console.log(err))
  },
  deleteItinerary: async (req, res) => {
    const id = req.params
    try {
      await Itinerary.findOneAndDelete({_id: id})
    } catch (error) {
      console.log(error)
    }
    res.json({success: true})
  },
}

module.exports = itineraryController