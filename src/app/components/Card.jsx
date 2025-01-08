import { HomeIcon, LocationIcon, HeartIcon, ProfileIcon } from "./Allsvg";

const Card = ({
  city,
  weather,
  condition,
  date,
  conditionImages,
  headingColor,
}) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h4 className="text-gray-400 mb-2">{date}</h4>
          <h2 className={`${headingColor} text-5xl font-extrabold`}>{city}</h2>
        </div>
        <LocationIcon className="stroke-gray-600" />
      </div>
      <div className="flex flex-col">
        <div className="relative z-30  mt-10">
          <div className=" w-[350px] h-[350px">
            <img
              alt=""
              src={conditionImages}
              className=" w-[100%] h-[100%] object-cover z-20"
            />
          </div>

          <div className="text-transparent bg-clip-text font-extrabold text-[110px] -mt-10 bg-gradient-to-b from-black to-white">
            {weather}
          </div>
          <div className="font-extrabold mb-12 h-6 text-[#FF8E27]">
            {condition}
          </div>
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
