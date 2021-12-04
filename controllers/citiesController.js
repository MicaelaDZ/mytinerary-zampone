const City = require('../models/City')//asi importa el controlador

const citiesController = {
  returnCities: (req, res) => {
    City.find()
    .then((response)=> res.json({response}))
    
  },
  returnCity: (req, res) => {
    City.findOne({_id: req.params.id}).then((response) => {
      res.json({response})
    })
    },
    createCity:(req,res) =>{
      const {name, src, description, country} = req.body
      const city = new City({name,src,description, country}).save()
      .then((response) => res.json({response:{city}}))
      console.log(city)
      
      
    },
    deleteCity: async (req,res) =>{
      const id = req.params.id
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
