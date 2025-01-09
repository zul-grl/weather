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
  const [nightcondition, setNightcondition] = useState();
  const [value, setValue] = useState("");

  const leftImages = {
    sun: "./sunny.png",
    cloud: "./Clouds.png",
    rain: "./Rain.png",
    wind: "./Wind.png",
    snow: "./Snow.png",
    thunder: "./thunder.png",
  };
  const rightImages = {
    sun: "./sun.png",
    cloud: "./Cloudsmoon.png",
    rain: "./Rainmoon.png",
    wind: "./Windmoon.png",
    snow: "./Snowmoon.png",
    thunder: "./thundermoon.png",
  };
  const getWeatherImage = (condition, images) => {
    const weatherCondition = condition?.toLowerCase();
    switch (true) {
      case weatherCondition?.includes("sun"):
      case weatherCondition?.includes("clear"):
        return images.sun;
      case weatherCondition?.includes("cloud"):
        return images.cloud;
      case weatherCondition?.includes("rain"):
        return images.rain;
      case weatherCondition?.includes("wind"):
        return images.wind;
      case weatherCondition?.includes("snow"):
        return images.snow;
      case weatherCondition?.includes("storm"):
      case weatherCondition?.includes("thunder"):
        return images.thunder;
      default:
        return images.sun;
    }
  };
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
    setminWeather(weatherdata.forecast.forecastday[0].day.mintemp_c);
    setmaxWeather(weatherdata.forecast.forecastday[0].day.maxtemp_c);
    setDate(weatherdata.forecast.forecastday[0].date);
    setNightcondition(
      weatherdata.forecast.forecastday[0].hour[23].condition.text
    );
    setCondition(weatherdata.current.condition.text);
    setSelectedCity(city);
    setSearched([]);
    setValue("");
  }

  useEffect(() => {
    getData();
    getWeather("Ulaanbaatar");
  }, []);

  return (
    <div className="relative w-full h-full ">
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
            value={value}
            setValue={setValue}
            getWeatherImage={getWeatherImage}
            images={leftImages}
          />
          <Right
            selectedCity={selectedCity}
            condition={nightcondition}
            weather={maxweather}
            date={date}
            getWeatherImage={getWeatherImage}
            images={rightImages}
          />
        </div>
      </div>
    </div>
  );
}
