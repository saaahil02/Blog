import React,{useState} from 'react'
import "../style/register.css"
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const navigate =useNavigate();
    const[input,setInput]=useState({
        username:"",
        email:"",
        password:""

    })
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
          const res= await axios.post("http://localhost:9000/api/v1/user/register",input);
            alert(res.data.message);
            navigate("/login")
        }catch(error){
            alert(error.response.data.message);
        }
    }
  return (
    <>
    <div className="container">
      <h2 className="title">Sign Up Here</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name='username' value={input.username}
            onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}
            placeholder="Enter your name" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" name='email' value={input.email}
            onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" name='password' value={input.password}
            onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} placeholder="Enter your password" />
          </div>

          <button type="submit" className="submit-btn">Register</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Register