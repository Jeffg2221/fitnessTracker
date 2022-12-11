require('dotenv').config()

//import express from "express"
const express = require("express");

// console.log(express)
const cors = require('cors');

const app = express();
// console.log(app)

const cookieParser = require('cookie-parser');

//name used in database for project
const DB = "workout"

//-- MIDDLEWARE---
// make sure these lines are above any app.get or app.post code blocks
app.use(cors({credentials: true, origin: 'http://localhost:3000'}), express.json(), express.urlencoded({extended:true}));
app.use(cookieParser());

// Connect to database using mongoose
require("./config/mongoose.config")(DB);


// // //modularize routes
require("./routes/workout.routes")(app);
require("./routes/users.routes")(app);






app.listen(process.env.PORT, () => console.log(`>> SERVER is up on port ${process.env.PORT} and is listening for Requests to Respond to `))