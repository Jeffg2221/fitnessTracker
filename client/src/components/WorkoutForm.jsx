import React, { useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const WorkoutForm = () => {
    const navigate = useNavigate()

    // forms state variable
    const [title, setTitle] = useState("")
    const [load, setLoad] = useState("")
    const [reps, setReps] = useState("")




    //Create an array to store errors from the API
    const [errors, setErrors] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(title)

        const newWorkout = {
            title, 
            load, 
            reps, 
        

        }
        console.log(newWorkout)

        axios.post("http://localhost:8000/api/workouts", newWorkout)
        .then(res => {
            console.log("✅ client success")
            console.log(res.data)
            navigate("/")
        })
        .catch(err => {
            console.log("❌ client error")
            console.log(err)
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            console.log(JSON.stringify(errorResponse))
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        })
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <h3>Add a New Workout</h3>

            <label>Excersice Title:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <label>Load (in kg):</label>
            <input
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
            />

            <label>Number of Reps:</label>
            <input
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
            />

            <button>Add Workout</button>
            {errors && <div className="error">{errors}</div>}
        </form>
    )
}

export default WorkoutForm
