import React from "react";
import { useState } from "react";
import axios from "axios";
function Weather() {
  const [weather, setWeather] = useState();
  const [temperature, setTemperature] = useState();
  const [city, setCity] = useState();
  let handle = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=b0454686b4c0f5459fed65be7ad96ae7`
      )
      .then((res) => {
        if (res.data.cod == 404) {
          return;
        }
        setTemperature(
          Math.trunc(res.data["list"][0]["main"]["temp"] - 273.15) + " degree"
        );
        setWeather(res.data["list"][0]["weather"][0]["main"]);
        axios
          .post("http://localhost:3000/apidata", { weather, temperature, city })
          .then(alert("api data also saved/checked in backend"));
      })
      .catch(() => {
        axios.get(`http://localhost:3000/sendweather?city=${city}`).then((res) => {
          
          setTemperature(res.data.temperature);
          setWeather(res.data.weather)
        });
        console.log("fire")
      });
  };
  return (
    <div
      style={{
      
       height:"100vh",
       width:"100vw",
        display: "flex",
        flexDirection: "column",
        backgroundSize: "cover",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "cursive",  
        fontSize: "large",
      
       
      }}
    >
      <div
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
          height: "60vh",
          width: "60vh",
          backdropFilter: `blur(18px)`,
          backgroundColor: "rgba(255,255,255,0.5)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid lightgray",
        
        }}
      >
        <h1>weather app</h1>
        <input
          onChange={(e) => setCity(e.target.value)}
          style={{
            backgroundColor: "#F2F2F2",
            border: "none",
            borderRadius: "12px",
            textAlign: "center",
            fontSize: "25px",
            fontFamily: "sans-serif",
          }}
          label="enter city"
        ></input>
        <br></br>
        <br></br>
        <button
          style={{
            padding: "12px",
            border: "none",
            borderRadius: "12px",
            backgroundColor: "#304356",
            color: "white",
            fontSize: "large",
            width: "70%",
          }}
          onClick={handle}
        >
          check{" "}
        </button>
        <div
          style={{
            border: "3px solid #304356",
            padding: "2PX 12PX",
            marginTop: "30px",
            borderRadius: "12px",
          }}
        >
          <h3>Location:{city}</h3>
          <h3>Weather: {weather}</h3>
          <h3>Temperature: {temperature} </h3>
        </div>
      </div>
    </div>
  );
}

export default Weather;
