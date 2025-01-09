import { HomeIcon, LocationIcon, HeartIcon, ProfileIcon } from "./Allsvg";
const Card = ({
  city,
  weather,
  condition,
  date,
  headingColor,
  background,
  getWeatherImage,
  images,
  loading,
}) => {
  if (loading) {
    return (
      <div
        className={`w-[550px] h-[1000px] rounded-3xl py-[56px] px-[40px] ${background} p-8 shadow-lg animate-pulse flex items-center justify-center`}
      >
        <div className="w-12 h-12 rounded-full border-4 border-gray-300 border-t-transparent animate-spin"></div>
      </div>
    );
  }
  return (
    <div
      className={`w-[550px] h-[1000px] rounded-3xl py-[56px] px-[40px] ${background} p-8 shadow-lg`}
    >
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-gray-400 text-2xl">{date}</h3>
          <h2 className={`${headingColor} text-6xl font-extrabold`}>{city}</h2>
        </div>
        <LocationIcon className="stroke-gray-600" />
      </div>
      <div className="flex flex-col">
        <div className="relative z-30 mt-10">
          <div className="w-[350px] m-auto h-[350px] relative overflow-hidden">
            <img
              alt=""
              src={getWeatherImage(condition, images)}
              className="w-[100%] h-[100%] object-cover z-20"
            />
          </div>
          <div className="text-transparent bg-clip-text font-extrabold text-[140px] text-center mt-4 bg-gradient-to-b from-black to-white">
            {weather}
          </div>
        </div>
        <div className="font-extrabold text-[25px] mb-12 h-6 text-[#FF8E27]">
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
