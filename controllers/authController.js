const User = require("../models/User")
const bcryptjs =require("bcryptjs") //encripta y desencripta

const authController = {
        signUpUser: async (req, res) => {
        const {name, lastName, email,password,photo,country} = req.body

        if(password === "") {
          password = null
        }

        try{
          const userExists = await User.findOne({email}) //user del nombre del modelo
          if(userExists){
            res.json({success:false, error:"The user is already registered", response: null})
          }else{
            const passwordHashed = bcryptjs.hashSync(password,10)
            const newUser = new User({name, lastName, email, password: passwordHashed, photo, country})            
            await newUser.save()
            res.json({success:true, response: newUser, error: null})
          }

          }catch(error){
            res.json({success:false, response:null, error:error})
          }
        },
        readUsers : (req,res) => {
          User.find().then((response) => {
            res.json({response})
          })
        },
        signInUser: async (req,res) =>{
          const {email,password} = req.body
          try {
            const emailExists = await User.findOne({email})
            if(emailExists){
              let passwordSucceed = bcryptjs.compareSync(password, emailExists.password)
                         
               if(passwordSucceed){
                 res.json({success: true, response: {email}, error:null})//respuesta comparala con {email}
                }else{
                  res.json({success: false, response: null, error:"Password is incorrect"})
               }
              }else{
                res.json({success:false,response: null, error:"Email doesn't exist"})
              }
          }catch(error) {
            res.json({success:false,response: null, error:"Email or password doesnt exist"})
          }
        }
       
}

module.exports = authController