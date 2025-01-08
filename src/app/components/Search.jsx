import { Searchsvg } from "./Allsvg";

export default function SearchBar({ searchHandler }) {
  return (
    <div className="absolute z-30 top-8 left-1/2 transform -translate-x-1/2">
    <div className="flex gap-4 py-6 px-5 bg-white rounded-full shadow-md w-[567px] font-bold text-[36px]">
      <Searchsvg />
      <input
        type="text"
        placeholder="Search"
        className="outline-none w-full text-gray-900 placeholder-gray-400"
        onChange={searchHandler}
      />
    </div>
  </div>
  );
}