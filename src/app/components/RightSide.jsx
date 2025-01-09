import Card from "./Card";
export default function Right({
  selectedCity,
  condition,
  weather,
  date,
  conditionImages2,
  getWeatherImage,
  images,
  loading
}) {
  return (
    <div className="w-1/2 h-full bg-black relative ">
      <img
        src="./Ellipse.svg"
        alt=""
        className="absolute right-[260px] bottom-[100px] w-[20%]] h-[20%]"
      />
      <div className="relative z-20 h-full flex justify-center items-center">
        <Card
         selectedCity={selectedCity}
          getWeatherImage={getWeatherImage}
          images={images}
          condition={condition}
          weather={weather}
          date={date}
          headingColor="text-white"
          background="bg-[#111827]/80"
          loading={loading}
        />
      </div>
    </div>
  );
}
