const express=require('express');
const mongoose=require('mongoose');
require('dotenv').config();
const cors=require('cors');
const app=express();
const routeURLS=require('./routes/routes')

//connect to mongodb
mongoose.connect(process.env.DB_URL,()=>console.log("database connected"))
app.use(express.json())
app.use(cors())

//using routes from routes.js
app.use("/newsblog",routeURLS);

//defining port to listen
const port=process.env.PORT||5000;
app.listen(port,console.log(`serve at port ${port}`))