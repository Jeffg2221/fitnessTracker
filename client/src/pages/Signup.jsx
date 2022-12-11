import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Register = () => {


    // const {id} = useParams();

    //for redirect
    const navigate = useNavigate()

    // forms submit variables 
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")




    //DB error array
    const [errors, setErrors] = useState([]);

    const createUser = (e) => {
        e.preventDefault();
        const tempObjToSendToDB = {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        
        }
        axios.post('http://localhost:8000/api/register', tempObjToSendToDB, { withCredentials: true })
            .then(response => {
                console.log("Client Success")
                console.log(response.data)
                navigate('/')
            })
            .catch(error => {
                console.log("Something Went Wrong")
                console.log(error)
                const errorResponse = error.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }
    return (
        <>

            <div >
                {errors.map((error, index) => <p key={index}>{error}</p>)}
            </div>
            <h1>Register</h1>
            <form className="signup" onSubmit={createUser}>
                <label>First Name: </label>
                <input onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                <label>Last Name: </label>
                <input onChange={(e) => setLastName(e.target.value)} value={lastName} />
                <label>Email </label>
                <input onChange={(e) => setEmail(e.target.value)} value={email} />
                <label>Password </label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                <label>Confirm Password </label>
                <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
                <button >Register</button>

            </form>


        </>
    )
}

export default Register