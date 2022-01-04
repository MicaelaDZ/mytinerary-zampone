require('dotenv').config()
const Router = require("./routes/routes") 
const passport = require("passport")
const express = require("express")
const cors = require("cors")
const app = express()
require('./config/database')


app.use(cors())
app.use(express.json()) 
app.use(passport.initialize())
app.use("/api", Router)

app.listen(process.env.PORT || 4000, process.env.HOST || '0.0.0.0', ()=>{
    console.log("Inicializando...")
})
