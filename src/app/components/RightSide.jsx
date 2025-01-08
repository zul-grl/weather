import Card from "./Card";

export default function Right({
  selectedCity,
  condition,
  weather,
  date,
  conditionImages2,
}) {
  return (
    <div className="w-1/2 h-full bg-black relative flex justify-center items-center">
      <div className="z-30 h-full">
        <div className="shadow-lg bg-[#111827]/75 backdrop-blur-md w-[500px] h-[1000px] rounded-3xl p-8 py-[56px] px-[40px]">
          <Card
            city={selectedCity}
            conditionImages={conditionImages2}
            condition={condition}
            weather={weather}
            date={date}
            headingColor="text-white"
          />
        </div>
      </div>
    </div>
  );
}
