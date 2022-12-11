const mongoose = require('mongoose')


const workoutSchema = new mongoose.Schema(
    {
title:{
        type:String,
        required:[true, "{PATH} is required"],
        minlength: [3, "{PATH} must be atleast 3 characters long"]
    } ,
reps:{
        type:Number,
        required:[true, "{PATH} is required"],
        minlength: [3, "{PATH} must be atleast 3 characters long"]
    } ,
load:{
        type:Number,
        required:[true, "{PATH} is required"],
        minlength: [3, "{PATH} must be atleast 3 characters long"]
    } ,

    
},{timestamps:true});



const Workout = mongoose.model('workout', workoutSchema);

module.exports = Workout

