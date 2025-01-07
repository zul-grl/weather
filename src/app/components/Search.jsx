"use client";
import { useState } from "react";
import Card from "./Card";
const Search = () => {
  const [cities, setCities] = useState([]);
  const [searched, setSearched] = useState([]);

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
  return (
    <div className="flex gap-10 relative h-[100vh] w-[100vw] top-[100px] left-[200px]">
      <div className="absolute p-10">
        <div className="flex gap-4 py-6 px-5 bg-[#FFF] rounded-full shadow-md w-[567px] font-bold text-3xl ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <g opacity="0.2">
              <path
                d="M31.51 28.51H29.93L29.37 27.97C31.33 25.69 32.51 22.73 32.51 19.51C32.51 12.33 26.69 6.51001 19.51 6.51001C12.33 6.51001 6.51001 12.33 6.51001 19.51C6.51001 26.69 12.33 32.51 19.51 32.51C22.73 32.51 25.69 31.33 27.97 29.37L28.51 29.93V31.51L38.51 41.49L41.49 38.51L31.51 28.51ZM19.51 28.51C14.53 28.51 10.51 24.49 10.51 19.51C10.51 14.53 14.53 10.51 19.51 10.51C24.49 10.51 28.51 14.53 28.51 19.51C28.51 24.49 24.49 28.51 19.51 28.51Z"
                fill="black"
              />
            </g>
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="outline-none w-[100%]"
            onChange={searchHandler}
          />
        </div>
        <div className="mt-2.5 rounded-3xl bg-white/80 py-4 shadow-lg backdrop-blur-md">
          {searched.length > 0 &&
            searched.slice(0, 4).map((city) => (
              <div className="flex px-6 py-py-2 items-center gap 4px">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <g opacity="0.2">
                    <path
                      d="M20 3.33334C13.55 3.33334 8.33337 8.55001 8.33337 15C8.33337 23.75 20 36.6667 20 36.6667C20 36.6667 31.6667 23.75 31.6667 15C31.6667 8.55001 26.45 3.33334 20 3.33334ZM11.6667 15C11.6667 10.4 15.4 6.66668 20 6.66668C24.6 6.66668 28.3334 10.4 28.3334 15C28.3334 19.8 23.5334 26.9833 20 31.4667C16.5334 27.0167 11.6667 19.75 11.6667 15Z"
                      fill="black"
                    />
                    <path
                      d="M20 19.1667C22.3012 19.1667 24.1667 17.3012 24.1667 15C24.1667 12.6988 22.3012 10.8333 20 10.8333C17.6989 10.8333 15.8334 12.6988 15.8334 15C15.8334 17.3012 17.6989 19.1667 20 19.1667Z"
                      fill="black"
                    />
                  </g>
                </svg>
                <p className="text-2xl font-bold">{city}</p>
              </div>
            ))}
        </div>
        <Card />
      </div>
    </div>
  );
};
export default Search;
