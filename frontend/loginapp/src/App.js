import React from 'react'
import Login from './components/Login'
import Weather from './components/Weatherapp'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import "./App.css"
import Authenticate from './components/Authenticate'
function App() {
  return (
    <div className='app' >
      <BrowserRouter>
      <Routes>
        <Route element={<Authenticate/>} path="/checkuser"></Route>
        <Route element={<Login/>} path="/adduser"></Route>
        <Route element={<Weather/>} path="/weather"></Route>
        </Routes></BrowserRouter>
 
   
    </div>
  )
}

export default App

