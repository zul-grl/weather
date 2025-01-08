import { HomeIcon } from "./Allsvg";
import { LocationIcon } from "./Allsvg";
import { HeartIcon } from "./Allsvg";
import { ProfileIcon } from "./Allsvg";
const Card = ({ city, weather, condition, date }) => {
  return (
    <div className="w-[500px] h-[1000px] rounded-3xl bg-white/75 p-8 shadow-lg py-[56px] px-[40px]">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h4 className="text-gray-400 mb-2">{date}</h4>
          <h2 className="text-5xl font-extrabold text-gray-90">{city}</h2>
        </div>
        <LocationIcon className="stroke-gray-600" />
      </div>

      <div className="flex flex-col ">
        <div className=" mb-4">
          <img src="./icon.png" alt="" />
        </div>
        <div className="text-transparent bg-clip-text font-extrabold text-[110px] -mt-10 bg-gradient-to-b from-black to-white">
          {weather}
        </div>
        <div className="font-extrabold mb-12 h-6 text-[#FF8E27]">
          {condition}
        </div>
      </div>

      <div className="flex justify-between mt-12">
        <HomeIcon />
        <LocationIcon className="stroke-[#D1D5DB]" />
        <HeartIcon />
        <ProfileIcon />
      </div>
    </div>
  );
};
export default Card;
