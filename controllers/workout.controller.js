const Workout = require('../models/workout.model');


// // ----FULL CRUD ----
module.exports = {
    // // Read All
    findAll: (req, res) => {
        Workout.find().sort({type:"asc"})
            .then(allWorkouts => {
                res.json(allWorkouts)
            })

            .catch(err => res.json(err));
    },
    // Read One
    findOne: (req, res) => {
        //http://localhost:8000/api/workouts/3
        Workout.findById(req.params.id)
            .then(oneWorkout => res.json(oneWorkout))
            .catch(err => res.json(err))
    },

    // Create
    create: (req, res) => {
        console.log(req.body)
        Workout.create(req.body)
            .then(newWorkout => {
                console.log("Server Success")
                res.json(newWorkout)
            })
            .catch(err => {
                console.log("SERVER ERROR", err)
                res.status(400).json(err)
            })
    },

    // Update
    Update: (req, res) => {
        console.log("UPDATE ID:", req.params.id)
        console.log("req.body:", req.body)
        Workout.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
            .then(updatedWorkout => res.json(updatedWorkout))
            .catch(err => {
                console.log("SERVER ERROR", err)
                res.status(400).json(err)
            })
},

    //  // Delete
    delete : (req, res) => {
        Workout.findByIdAndDelete( req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    }





}