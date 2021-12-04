const citiesController = require("../controllers/citiesController")
const itineraryController = require("../controllers/itineraryController")

const Router = require("express").Router()

Router.route('/cities')
.get(citiesController.returnCities)
.post(citiesController.createCity)

Router.route('/city/:id')
.get(citiesController.returnCity)
.post(citiesController.createCity)
.delete(citiesController.deleteCity)
.put(citiesController.modifyCity)

Router.route('/itinerary')
.get(itineraryController.returnItineraries)
.post(itineraryController.createItinerary)

Router.route('/itinerary/:id')
.get(itineraryController.returnItinerary)
.post(itineraryController.returnItinerary)
.delete(itineraryController.deleteItinerary)
.put(itineraryController.modifyItinerary)

Router.route("/itineraries/:city")
.get(itineraryController.returnItinerariesByCity)

module.exports = Router