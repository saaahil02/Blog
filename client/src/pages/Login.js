import React,{useState} from 'react'
import "../style/register.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate=useNavigate();
    const[input,setInput]=useState({
        email:"",
        password:"",
    })
    const handleLogin=async(e)=>{
        e.preventDefault();
        try{
           const res=await axios.post("http://localhost:9000/api/v1/user/login",input)
            alert(res.data.message);
            localStorage.setItem("token",res.data.token);
            localStorage.setItem("username",res.data.name);
            navigate("/")
        }catch(error){
            alert(error.response.data.message);
        }
    }
  return (
    <>
    <div className="container">
      <h2 className="title">Login Page</h2>
      <div className="form-container">
        <form onSubmit={handleLogin}>
          
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={input.email} 
            onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} 
            placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password"
            name="password" value={input.password} 
            onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}  
            placeholder="Enter your password" />
          </div>

          <button type="submit" className="submit-btn">Login</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login