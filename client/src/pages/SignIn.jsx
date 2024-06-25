// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const SignIn = () => {

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    const [signIn, setSignIn] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate();


    const handleChange = (e) => {
        setSignIn(e.target.value);
        console.log(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:4000/signin", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(signIn)
            });
            const resData = await res.json();
            console.log(resData);
            setSignIn(resData);

            if (resData.success) {
                navigate("/home");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
    <form className='body' onSubmit={handleSubmit}>
       <h1 className='header'>
        Sign in
       </h1>

       <div className='inputBox'>
          <h2 className='email'>Email Address</h2>
          <input 
            type="email" 
            placeholder='enter email' 
            value={signIn.email} 
            onChange={handleChange} 
          />

          <h2 className='password' >Password</h2>
          <input 
            type="password" 
            placeholder='enter password' 
            value={signIn.password} 
            onChange={handleChange} 
          />

          <button 
            className='btn'
          >
            Submit
          </button>

          <Link to="/signup" className="link">Sign Up</Link>
       </div>

    </form>
    )
}

export default SignIn