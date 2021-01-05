const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
//local import
const authRoute = require('./route/auth')

//setup
const app = express();
dotenv.config();
app.use(express.json())
app.use('/',authRoute)



// /PORT
const PORT = process.env.PORT
//connect to database
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    autoIndex:true,
    useUnifiedTopology:true
}).then((err)=>{
    console.log('Connected to database')
    return app.listen(PORT)
}).then((success)=>{
    console.log(`Listening to port ${PORT}`)
})



//
