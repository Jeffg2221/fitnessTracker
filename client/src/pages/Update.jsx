import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Update = (props) => {

    const navigate = useNavigate()

    // forms state variable
    const [title, setTitle] = useState("")
    const [load, setLoad] = useState("")
    const [reps, setReps] = useState("")

    const { id } = useParams()

    

    useEffect(() => {
        axios.get('http://localhost:8000/api/workouts/' + id)
            .then(res => {
                console.log(res.data)
                setTitle(res.data.title)
                setLoad(res.data.load)
                setReps(res.data.reps)
                

            })
            .catch(err => console.log(err))
    }, [id])
    const [errors, setErrors] = useState([]);
    //onSubmit to update title, price, and description
    const updateWorkout = (e) => {
        e.preventDefault();
        // console.log(title,price,description)  checks if content is being recorded in the form 
        //! PUT REQUEST
        axios.put("http://localhost:8000/api/workouts/" + id, {

            title, 
            load, 
            reps,
        })

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
        <form className="create" onSubmit={updateWorkout}>
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

            <button>Update</button>
            {errors && <div className="error">{errors}</div>}
        </form>
    )
}

export default Update