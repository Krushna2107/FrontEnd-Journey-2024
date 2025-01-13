import "bootstrap/dist/css/bootstrap.min.css"; 
import './App.css';
import { useEffect, useState } from "react";
import axios from "axios"; // Ensure axios is imported

function App() {
  const apiKey = "8819647e0af2a70d3ed7d3ba2d8b3933";
  const [city, setCity] = useState(""); // State for city input
  const [data, setData] = useState(null); // State for weather data
  const [error, setError] = useState(""); // State for error message
  const [loading, setLoading] = useState(false); // State for loading

  const getWeatherDetails = (weatherCity) => {
    if (!weatherCity) return;
    setLoading(true); // Start loading
    setError(""); // Clear errors
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${weatherCity}&appid=${apiKey}&units=metric`;
    axios
      .get(apiURL)
      .then((res) => {
        console.log("API Response:", res.data);
        setData(res.data);
        setLoading(false); // Stop loading
      })
      .catch((err) => {
        setError("City not found. Please try again.");
        setData(null); // Clear data on error
        setLoading(false);
      });
  };

  const handleSearch = () => {
    getWeatherDetails(city);
  };

  useEffect(() => {
    // Fetch default city weather on load
    getWeatherDetails("Mumbai");
  }, []);

  return (
    <div className="App">
      <div className="col-md-12">
        <div className="weatherbg d-flex flex-column align-items-center justify-content-center">
          <h1 className="heading text-white mb-4">Weather App</h1>
          <div className="d-grid gap-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter city name"
              value={city}
              onChange={(e) => setCity(e.target.value)} // Update city state
            />
            <button type="button" className="btn btn-primary" onClick={handleSearch}>
              Search
            </button>
          </div>
          {loading && <div className="spinner-border text-light mt-3" role="status" />}
        </div>
      </div>
      {error && <p className="text-danger mt-3">{error}</p>}
      {data && (
        <div className="col-md-12 text-center mt-5">
          <div className="shadow rounded weatherResultBox">
            <img
              className="weatherIcon"
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt="Weather Icon"
            />
            <h3 className="mt-1">Weather Result</h3>
            <h5 className="weatherCity">{data.name}</h5>
            <h6 className="weatherTem mt-1">{Math.round(data.main.temp)}°C</h6>
            <p className="weatherCon">Condition: {data.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
