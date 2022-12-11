import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios'
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';



const Home = (props) => {



    const [workouts, setWorkouts] = useState([])

    // trigger when the component has finished loading
    useEffect(() => {
        //get all the workouts from server
        axios.get("http://localhost:8000/api/workouts")
            .then(res => {
                console.log(res.data)
                setWorkouts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])



    return (
        <div className="home">
            <div className="workouts">
                
                    <WorkoutDetails  />
                
            </div>
            {/* <WorkoutForm /> */}
        </div>
    )
}

export default Home
