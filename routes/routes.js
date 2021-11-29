const citiesController = require("../controllers/citiesController")

const Router = require("express").Router()



Router.route('/cities')
.get(citiesController.returnCities)
.post(citiesController.createCity)




Router.route('/city/:id')
.get(citiesController.returnCity)
.post(citiesController.createCity)
.delete(citiesController.deleteCity)
.put(citiesController.modifyCity)

module.exports = Router