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
  conditionImages1,
}) {
  const searchHandler = (e) => {
    const search = e.target.value;
    const filtered = cities.filter((city) =>
      city.toLowerCase().includes(search)
    );
    setSearched(filtered);
  };

  return (
    <div className="w-1/2 h-full bg-[#F3F4F6] relative flex justify-center items-center ">
      <img
        alt=""
        src="./Group2.svg"
        className=" absolute inset-0 left-[500px] top-[150px] w-[176px] h-[176px] object-fit: cover;"
      ></img>
      <SearchBar searchHandler={searchHandler} />
      {searched.length > 0 && (
        <SearchResults searched={searched} getWeather={getWeather} />
      )}

      <div className="relative z-20 h-full">
        <div className=" w-[500px] h-[1000px] rounded-3xl p-8 py-[56px] px-[40px] bg-white/75 p-8 shadow-lg">
          <Card
            city={selectedCity}
            conditionImages={conditionImages1}
            condition={condition}
            weather={weather}
            date={date}
            headingColor="text-black"
          />
        </div>
      </div>
    </div>
  );
}
