const Activity = require('../models/Activity')

const activityController = {
    returnActivities:(req,res)=>{
        Activity.find()
        .populate("itinerary")
        .then((response)=> res.json({response}))
    }, 
    returnActivity:(req,res)=>{
        Activity.findOne({_id: req.params.id})
            .then((response) =>{res.json({response})
    })  
    },
    returnActivitiesByItinerary: (req, res) => {
        Activity.find({itinerary: {_id: req.params.itinerary}}) /*REVISAAAAAAR*/
            .then((response) => {
                res.json({response})
            })
            .catch((err) => console.log(err))
    },
    createActivity:(req,res)=>{
        const {
        title, 
        image, 
        itinerary
        }= req.body 
        new Activity(req.body).save()
        .then((response)=> res.json({activity: response, success:true})) //para que en el postman te informe si se guardo o no
        .catch((e) => res.json({error: e.errors, success:false}))
    },     
    modifyActivity: async(req,res) => {
        try{
            actualizado = await Activity.findOneAndUpdate({_id:req.params.id}, {...req.body}, {new:true})
        }catch(error){
            console.log(error)
        }
        res.json({success:actualizado ? true : false})
    },
    deleteActivity: async (req,res) =>{
        const id = req.params.id
        let activities
        try{
            await Activity.findOneAndDelete({_id:id})
            activities = await Activity.find()
        }catch(error){
        console.log(error)
        }
        res.json({response: activities, success:true})
    }
}

module.exports = activityController