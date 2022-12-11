import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = (props) => {

    const navigate = useNavigate()

    const [workouts, setWorkouts] = useState([])

    // trigger when the component has finished loading
    useEffect(() => {
        //get all the authors from server
        axios.get("http://localhost:8000/api/workouts")
            .then(res => {
                console.log(res.data)
                setWorkouts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // go to the update route
    const goToUpdate = (moviesMongoDB) => {
        console.log(moviesMongoDB)
        navigate("/workouts/" + moviesMongoDB + "/edit")
    }

    //Delete
    const deleteWorkout = (deleteID) => {
        if (window.confirm("Are you sure you want to delete your rating")) {


            axios.delete("http://localhost:8000/api/workouts/" + deleteID)

                .then(res => {
                    console.log("DELETE SUCCESS", res.data)

                    //remove form the DOM after a successful delete
                    setWorkouts(workouts.filter((workout) => workout._id !== deleteID))
                })
                .catch(err => console.log(err))
        }
    }




    return (
        <div>
        {
            workouts.map((oneWorkout) => {
                return (
                    <div key={oneWorkout._id} >
                    <div className="workout-details">
                        
                        <h4>{oneWorkout.title}</h4>
                        <p><strong>Load (lbs)</strong> {oneWorkout.load}</p>
                        <p><strong>Reps</strong> {oneWorkout.reps}</p>
                        <p>{formatDistanceToNow(new Date(oneWorkout.createdAt), { addSuffix: true })}</p>
                        <button onClick={() => goToUpdate(oneWorkout._id)}>edit</button>
                        <span className="material-symbols-outlined" onClick={() => deleteWorkout(oneWorkout._id)}>delete</span>
                        </div>
                    </div>
                )
            })

        }

        </div>
    )
}

export default WorkoutDetails
