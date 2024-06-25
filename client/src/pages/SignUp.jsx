
// eslint-disable-next-line no-unused-vars
import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";

const SignUp = () => {

    // const [signUp, setSignUp] = useState({
    //     email: "",
    //     password: ""
    // })

    // const navigate = useNavigate();


    // const handleChange = (e) => {
    //     setSignUp(e.target.value);
    //     console.log(e.target.value)
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const res = await fetch("http://localhost:4000/api/signup", {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(signUp)
    //         });
    //         const resData = await res.json();
    //         console.log(resData);

    //         setSignUp(resData);

    //         if (resData.success) {
    //             navigate("/signin");
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }


    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");








    // const [signupData, setSignupData] = useState({
    //   email: "",
    //   password: ""
    // })

    // const { email, password } = signupData;

    // const handleSubmit = async (e) => {
    //   e.preventDefault();

    //   console.log("Hi")

    //   try {
    //     const res = await axios.post("http://localhost:4000/api/signup", {
    //       email,
    //       password
    //     })

    //     const resData = await res.data;
        
    //     console.log(resData);

    //     // setEmail(resData.email);
    //     // setPassword(resData.password);

    //     setSignupData(resData)

    //   } catch (error) {
    //     console.log("error", error)
    //   }
    // }






    const [formData, setFormData] = useState({
      email: "",
      password: ""
    });

    const { email, password } = formData;

    const navigate = useNavigate();

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value.trim() });

      console.log(e.target.value)
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
        const res = await fetch('http://localhost/api/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        const data = await res.json();

        console.log(data);

        if(res.ok) {
          navigate('/');
        }
      } catch (e) {
         console.error(e)
      }
  };


    return (
    
  <form className='body' onSubmit={(e) => handleSubmit(e)}>
    <h1 className='header'>
      Sign Up
    </h1>

<div className='inputBox'>
   <h2 className='email'>Email Address</h2>
   <input 
     type="email" 
     name="email"
     placeholder='enter email' 
     value={email} 
     onChange={handleChange} 
   />

   <h2 className='password' >Password</h2>
   <input 
     type="password" 
     name="password"
     placeholder='enter password' 
     value={password} 
     onChange={handleChange} 
   />

   <button 
     className='btn'
     type="submit"
   >
     Submit
   </button>

   <Link to="/" className="link">Sign In</Link>
</div>

</form>
    )
}

export default SignUp