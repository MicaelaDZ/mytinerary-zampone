require('dotenv').config()
const Router = require("./routes/routes") 
const express = require("express")
const cors = require("cors")
const app = express()
require('./config/database')
app.use(cors())
app.use(express.json())
app.use("/api", Router)



app.listen(4000, ()=>{
    console.log("eminomepelees")
})
