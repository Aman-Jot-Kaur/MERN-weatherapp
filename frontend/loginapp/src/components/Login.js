import React from 'react'
import "./Login.css"
function Login() {
  return (
    <div>
          <div className="form">
      <form action="http://localhost:3000/signup" method="post" style={{  backdropFilter: `blur(18px)`,
         color:"black"}} >
        <div className="input-container" style={{fontSize:"large"}}>
          <label>Username </label>
          <input type="text" name="username" required />
        
        </div>
        <div className="input-container" style={{fontSize:"large"}}>
          <label>Password </label>
          <input type="password" name="password" required />
         
        </div>
        <div className="button-container">
          <input style={{ padding: "12px",
            border: "none",
            borderRadius: "12px",
            backgroundColor: "#304356",
            color: "white",cursor:"pointer",
            fontSize: "large"}} type="submit" />
          
        </div>
      </form>
      <br></br>
      <button style={{ padding: "12px",
            border: "none",
            borderRadius: "12px",
            backgroundColor: "#304356",
            color: "white",
            fontSize: "large",
            cursor:"pointer"}} href="/checkuser">login instead</button>
    </div>
    </div>
  )
}

export default Login
