import { LocationIcon } from "./Allsvg";

export default function SearchResults({ searched, getWeather }) {
  return (
    <div className="absolute z-30 top-28 left-1/2 transform -translate-x-1/2 w-[567px] mt-2 rounded-2xl bg-white/80 py-4 shadow-lg backdrop-blur-md">
      {searched.slice(0, 4).map((city, index) => (
        <div
          key={index}
          onClick={() => getWeather(city)}
          className="flex px-6 py-2 items-center gap-4 cursor-pointer hover:bg-gray-100 active:bg-gray-200 transition-all"
        >
          <LocationIcon />
          <p className="text-2xl font-bold text-gray-900">{city}</p>
        </div>
      ))}
    </div>
  );
}
