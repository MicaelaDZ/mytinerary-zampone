const citiesController = require("../controllers/citiesController")
const itineraryController = require("../controllers/itineraryController")
const authController = require("../controllers/authController")
const validator = require("../config/validator")
const passport = require('../config/passport')

const Router = require("express").Router()
//conectado con controladores


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

Router.route("/auth/signup")
.get(authController.readUsers)
.post(validator, authController.signUpUser)


Router.route("/auth/signin")
.post( authController.signInUser) 

Router.route("/auth")
.get(passport.authenticate("jwt", {session: false}), authController.token)
//chequea el token y si esta todo bien pasa a la accion: loguearse.


module.exports = Router