import React from 'react'
import "./Login.css"
import axios from "axios"
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
function Authenticate() {
  const navigate=useNavigate();
  const [username,setUsername]=useState();
  const [password,setPassword]=useState();
  const handlesubmit=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3000/check",{username,password}).then(
             navigate("/weather")
    )
  }
  return (
    <div >
          <div className="form">
      <form method="post" onSubmit={handlesubmit} >
        <div className="input-container">
          <label>Username </label>
          <input onChange={(e)=>setUsername(e.target.value)} type="text" value={username} name="username" required />
        
        </div>
        <div className="input-container">
          <label>Password </label>
          <input onChange={(e)=>setPassword(e.target.value)} type="password" value={password} name="password" required />
         
        </div>
        <div className="button-container">
          <input type="submit" />
          
        </div>
      </form>
    </div>
    </div>
  )
}

export default Authenticate
