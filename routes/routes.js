const citiesController = require("../controllers/citiesController")
const itineraryController = require("../controllers/itineraryController")
const authController = require("../controllers/authController")
const activityController = require("../controllers/activityController")
const likesController = require("../controllers/likesController")
const validator = require("../config/validator")
const passport = require('../config/passport')

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

Router.route("/auth/signup")
.get(authController.readUsers)
.post(validator, authController.signUpUser)


Router.route("/auth/signin")
.post( authController.signInUser) 

Router.route("/auth")
.get(passport.authenticate("jwt", {session: false}), authController.token)

Router.route('/activities')
.post(activityController.createActivity)
.get(activityController.returnActivities)

Router.route('/activities/:id')
.get(activityController.returnActivity)
.post(activityController.createActivity)
.put(activityController.modifyActivity)
.delete(activityController.deleteActivity)

Router.route("/activity/:itinerary")
.get(activityController.returnActivitiesByItinerary)

Router.route("/like")
.put(likesController.like)

module.exports = Router