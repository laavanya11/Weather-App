import hotbg from "./Images/hot..jpeg.jpg";
import coldbg from "./Images/cold.jpeg.jpg";
import Description from "./Components/Description";
import { useEffect, useState } from "react";
import {getFormattedWeatherData} from "./weatherservices";

function App() {

  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");

  useEffect(() => {
    const fetchWeatherData= async()=>{
      const data= await getFormattedWeatherData("delhi" , units);
      setWeather(data);
    };
    fetchWeatherData();
    
  },[]);

  return (
    <div className="app" style={{backgroundImage: `url(${coldbg})`}}>
      <div className="overlay">

        {
          weather && (
          <div className="container">
            
            <div className="section section_input">
            <input type="text" name="city" placeholder="Enter City"/>
            <button>°F</button>
            </div>
            
            <div className="section section_temperature">
              
              <div className="icon">
              <h3>{`${weather.name}, ${weather.country}`}</h3>
              <img src={weather.iconURL} alt="Weather Icon"/>
              <h3>{weather.description}</h3>
              </div>
              
              <div className="temperature">
              <h1>{`${weather.temp.toFixed()} °${units === "metric" ? "C" : "F"}`}</h1>
              </div>
            </div>
            
            <Description weather={weather} units={units}/>
          </div>
          )
        }
      </div>
    </div>
    
  );
}

export default App;
