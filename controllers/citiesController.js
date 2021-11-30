// let ciudades = [
//   { name: "Buenos Aires", src: "../assets/BuenosAires.jpg", description: "", id: 1 },
//   { name: "Barcelona", src: "../assets/barceloneta.jpg", description:"", id: 2 },
//   { name: "Cancún", src: "../assets/Cancun.jpg", description:"", id: 3 },
//   { name: "Costa Rica", src: "../assets/CostaRica.jpg",description:"", id: 4 },
//   { name: "Egypt", src: "../assets/egipto.jpg", description:"", id: 5 },
//   { name: "Ireland", src: "../assets/ireland.jpg", description:"", id: 6 },
//   { name: "Maldives", src: "../assets/maldives.jpg", description:"", id: 7 },
//   { name: "Miami", src: "../assets/miami.jpg", description: "", id: 8 },
//   { name: "Paris", src: "../assets/paris.jpg", description:"", id: 9 },
//   { name: "Punta Cana", src: "../assets/puntaCana.jpg", description:"", id: 10 },
//   { name: "Santorini", src: "../assets/Santorini.jpg", description:"", id: 11 },
//   { name: "Australia", src: "../assets/australia.jpg", description:"", id: 12 },
// ];

const City = require('../models/City')//asi importa el controlador

const citiesController = {
  returnCities: (req, res) => {
    const cities = City.find()
    .then((response)=> res.json({response}))
    
  },
  returnCity: (req, res) => {
    const city = City.findOne({_id: req.params.id}).then((response) => {
      res.json({response})
    })
    },
    createCity:(req,res) =>{
      const {name, src, description} = req.body
      const city = new City({name,src,description}).save()
      .then((response) => res.json((response)))
      
      
    },
    deleteCity: async (req,res) =>{
      const id = req.params
      try{
        await City.findOneAndDelete({_id:id})
      }catch(error){
        console.log(error)
      }
      res.json({success:true})
    },
    modifyCity: async(req,res) => {
      let id =req.params.id
      let city = req.body
      let actualizado
      try{
        actualizado = await City.findOneAndUpdate({_id:id}, city, {new:true})
      }catch(error){
        console.log(error)
      }
      res.json({success:actualizado ? true : false})
    }
};

module.exports = citiesController;
