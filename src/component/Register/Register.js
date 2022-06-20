import "./Register.css"
import { useState } from "react";
import Axios from 'axios';

function Register() {
    const [name, setName] = useState("")
    const [firstName, setFirstName] = useState("")
    const [email, setEmail] = useState("")

    const addUser = () => {
        Axios.post('http://localhost:3001/create', {
            name: name, 
            firstName: firstName,
            email: email,
        }).then(() => {
            console.log("success");
        });
    };

    return (
        <div className="register">
            <div className="informationRegister">
            <label>Name:</label>
            <input type="text"
            onChange={(event) => {
                setName(event.target.value);
            }}/>
            <label>FirstName:</label>
            <input type="text"
            onChange={(event) => {
                setFirstName(event.target.value);
            }}/>
            <label>Email:</label>
            <input type="text"
            onChange={(event) => {
                setEmail(event.target.value);
            }}/>
            <button>Register</button>
            </div>
        </div>
    )
}

export default Register;