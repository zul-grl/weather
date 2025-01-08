"use client";
import { use, useEffect, useState } from "react";
import Card from "./Card";
import { Searchsvg, LocationIcon } from "./Allsvg";

const Search = () => {
  const [cities, setCities] = useState([]);
  const [searched, setSearched] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Ulaanbaatar");
  const [condition, setCondition] = useState();
  const [weather, setWeather] = useState();
  const [date, setDate] = useState();

  async function getData() {
    const result = await fetch("https://countriesnow.space/api/v0.1/countries");
    const data = await result.json();
    let incomeCities = data.data.map((country) => {
      return country.cities;
    });
    incomeCities = incomeCities.flat();
    setCities(incomeCities);
  }
  getData();
  const searchHandler = (e) => {
    const search = e.target.value;
    const filtered = cities.filter((city) => {
      return city.includes(search);
    });
    setSearched(filtered);
  };
  async function getWeather(city) {
    const weather = await fetch(
      ` https://api.weatherapi.com/v1/forecast.json?key=e64b0bd479b84631a4422025250801&q=${city}`
    );

    const weatherdata = await weather.json();
    setWeather(weatherdata.forecast.forecastday[0].day.maxtemp_c);
    setDate(weatherdata.forecast.forecastday[0].date);
    setCondition(weatherdata.forecast.forecastday[0].day.condition.text);
    setSelectedCity(city);
    setSearched([]);
  }

  useEffect(() => {
    getWeather("Ulaanbaatar");
  }, []);

  return (
    <div className="relative h-full w-[600px] flex items-center justify-end">
      <div className="absolute z-10 flex-col flex top-[20px]">
        <div className="flex gap-4  py-6 px-5 bg-white rounded-full shadow-md w-[650px] font-bold text-[36px] mt-[150px]">
          <Searchsvg />
          <input
            type="text"
            placeholder="Search"
            className="outline-none w-full"
            onChange={searchHandler}
          />
        </div>
        {searched.length > 0 && (
          <div className="w-[650px] mt-2 rounded-2xl bg-white/80 py-4 shadow-lg backdrop-blur-md">
            {searched.slice(0, 4).map((city, index) => (
              <div
                key={index}
                onClick={() => getWeather(city)}
                className="flex px-6 py-2 items-center gap-4 cursor-pointer "
              >
                <LocationIcon />
                <p className="text-2xl font-bold">{city}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        <Card
          city={selectedCity}
          condition={condition}
          weather={weather}
          date={date}
        />
      </div>
    </div>
  );
};

export default Search;
