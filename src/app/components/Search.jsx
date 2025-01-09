import { Searchsvg } from "./Allsvg";

export default function SearchBar({ searchHandler, value }) {
  return (
    <div className="absolute z-30 top-[155px] left-[675px] transform -translate-x-1/2">
      <div className="flex gap-4 py-6 px-5 bg-white rounded-full shadow-md w-[700px] font-bold text-[36px]">
        <Searchsvg />
        <input
          value={value}
          type="text"
          placeholder="Search"
          className="outline-none w-full text-gray-900 placeholder-gray-400"
          onChange={searchHandler}
        />
      </div>
    </div>
  );
}
