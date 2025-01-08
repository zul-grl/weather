"use client";
import { useState, useEffect } from "react";
import Border from "./components/Border";
import Left from "./components/LeftSide";
import Right from "./components/RightSide";

export default function Home() {
  const [cities, setCities] = useState([]);
  const [searched, setSearched] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Ulaanbaatar");
  const [condition, setCondition] = useState("");
  const [maxweather, setmaxWeather] = useState("");
  const [minweather, setminWeather] = useState("");
  const [date, setDate] = useState("");
 

  async function getData() {
    const result = await fetch("https://countriesnow.space/api/v0.1/countries");
    const data = await result.json();
    let incomeCities = data.data.map((country) => country.cities);
    incomeCities = incomeCities.flat();
    setCities(incomeCities);
  }

  async function getWeather(city) {
    const weather = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=e64b0bd479b84631a4422025250801&q=${city}`
    );
    const weatherdata = await weather.json();
    console.log(weatherdata.forecast.forecastday[0].day.mintemp_c);
    setminWeather(weatherdata.forecast.forecastday[0].day.mintemp_c);
    setmaxWeather(weatherdata.forecast.forecastday[0].day.maxtemp_c);
    setDate(weatherdata.forecast.forecastday[0].date);
    setCondition(weatherdata.current.condition.text);
    setSelectedCity(city);
    setSearched([]);
  }

  useEffect(() => {
    getData();
    getWeather("Ulaanbaatar");
  }, []);

  return (
    <div className="relative w-full h-full">
      <div className="w-full h-screen">
        <Border />
        <div className="w-full h-full flex">
          <Left
            cities={cities}
            searched={searched}
            setSearched={setSearched}
            getWeather={getWeather}
            selectedCity={selectedCity}
            condition={condition}
            weather={minweather}
            date={date}
            conditionImages1={"./sunny.png"}
          />
          <Right
            selectedCity={selectedCity}
            condition={condition}
            weather={maxweather}
            date={date}
            conditionImages2={"./sun.png"}
          />
        </div>
      </div>
    </div>
  );
}
