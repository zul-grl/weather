import Card from "./Card";
import SearchBar from "./Search";
import SearchResults from "./Searchresult";
export default function Left({
  cities,
  searched,
  setSearched,
  getWeather,
  selectedCity,
  condition,
  weather,
  date,
  getWeatherImage,
  images,
  setValue,
  value,
  loading,
}) {
  const searchHandler = (e) => {
    setValue(e.target.value);
    const search = e.target.value.toLowerCase();
    const filtered = cities.filter((city) =>
      city.city.toLowerCase().includes(search)
    );
    setSearched(filtered);
  };

  return (
    <div className="w-1/2 h-full bg-[#F3F4F6] relative flex justify-center items-center ">
      <img
        alt=""
        src="./Group2.svg"
        className=" absolute inset-0 left-[400px] top-[200px] "
      ></img>

      <SearchBar searchHandler={searchHandler} value={value} />
      {searched.length > 0 && (
        <SearchResults searched={searched} getWeather={getWeather} />
      )}

      <div className="relative z-20 h-full flex items-center">
        <Card
          city={selectedCity}
          condition={condition}
          weather={weather}
          date={date}
          headingColor="text-black"
          background="bg-white/80"
          getWeatherImage={getWeatherImage}
          images={images}
          loading={loading}
        />
      </div>
    </div>
  );
}
