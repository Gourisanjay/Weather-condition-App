import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStreetView ,faThermometerHalf } from "@fortawesome/free-solid-svg-icons";
import "./styles/Styles.css";
import Digitaltime from "./Digitaltime";

const Temperatureapp = () => {
  const [city, setCity] = useState("Pune");
  const [search, setSearch] = useState(null);

  useEffect(() => {
    const featchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4bcf5c83b8e34875abc2d14fd9567779`;


      const response = await fetch(url);

      const resJson = await response.json();
      setCity(resJson);
    };
    featchApi();
  }, [search])

  return (
    <>
      <div className="container">
        <div className="inputData">
          <input
            type="search"
            placeholder="Search city name..."
            className="inputField"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
          
        {!city || !city.main || !city.main.temp ? (
          <p className="notdata" > No Data Found...!!! </p>
        ) : (
          <div>
            <div className="info">
              <h1 className="location">
                <FontAwesomeIcon icon={faStreetView} />
                {search}
              </h1>
              <h2 className="temp"><FontAwesomeIcon icon={faThermometerHalf} /> {city.main.temp}°C</h2>
              <h3 className="tempmin_max">Min : {city.main.temp_min}°C | Max : {city.main.temp_max}°C</h3>
              <h4 className="tempmin_max">Wind Speed: {city.wind.speed} m/s</h4>
              <h4 className="tempmin_max">Humidity: {city.main.humidity}%</h4>
              <h4 className="tempmin_max">Visibility: {city.visibility / 1000} km</h4>
              <h4 className="tempmin_max">Pressure: {city.main.pressure} hPa</h4>
            </div>

            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
           
          </div>
          
        )}

       <div className="clock">
       <Digitaltime/>
       </div>   
        
      </div>
    </>
  );
};
export default Temperatureapp;
