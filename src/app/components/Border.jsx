const Border = () => {
  return (
    <div className="flex items-center justify-center left-[325px] h-[100vh] absolute z-20">
      <div className="flex justify-center items-center">
        <div className="border-[1px] rounded-full border-gray-300 w-[940px] h-[940px] flex justify-center items-center ">
          <div className="border-[1px] rounded-full border-gray-300 h-[540px] w-[540px] flex justify-center items-center  ">
            <div className="border-[1px] rounded-full border-gray-300 h-[340px] w-[340px] flex justify-center items-center ">
              <div className="border-[1px] rounded-full border-gray-300 h-[140px] w-[140px] flex justify-center items-center  bg-white">
                <div className="flex gap-x-4">
                  <img className="fill-black" src="./Group.svg" alt="" />
                  <img className="fill-black" src="./Vector.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Border;
