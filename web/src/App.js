import axios from "axios";
import { useState } from 'react';
import Card from "./components/card";
// import img from "../src/Assets/masjidd.jpeg" 
import './App.css';

function App() {
  const [cityName, setCityName] = useState("");
  const [countryName, setCountryName] = useState("");

  const [data, setData] = useState([]);

  let submitHandler = (e) => {
    e.preventDefault();

    console.log("I am submit");

    axios.get(`https://api.aladhan.com/v1/timingsByCity?city=${cityName}&country=${countryName}&method=1`)
      .then(function (response) {
        // handle success
        console.log(response);
        setData(response.data.data.timings)
      })
      .catch(function (error) {
        // handle error
        console.log("error in api call: ", error);
      })
      .then(function () {
        // always executed
      });
  }

  return (
    <div className="App">
      {/* <img src={img} alt=""/> */}
      <h1>Namaz App</h1>
      <div className="container">
        <form onSubmit={submitHandler}>
          <br />
          <input
            type="text"
            placeholder="Enter your city"
            required
            onChange={(e) => {
              console.log(e.target.value)
              setCityName(e.target.value)
            }}
          />
          <br />
          <input
            type="text"
            placeholder="Enter your country"
            required
            onChange={(e) => {
              console.log(e.target.value)
              setCountryName(e.target.value)
            }}
          />
          <br />
          <button className="btn" type='submit'>Check</button>

        </form>
      </div>


      {/* <div>
        {data.map((eachPrayer , index) => (
          <Card 
          key={index}
          fajr={eachPrayer.Fajr}
          />
        ))}
      </div> */}


      {
        data.map((eachForecast, index) => (

          <Card
            key={index}
            fajr={eachForecast.Fajr}
            sunrise={eachForecast.Sunrise}
            dhuhr={eachForecast.Dhuhr}
            asr={eachForecast.Asr}
            maghrib={eachForecast.Maghrib}
            isha={eachForecast.Isha}
          />
        ))
      }
    </div>
  );
}

export default App;
