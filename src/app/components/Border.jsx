const Border = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="relative">
        <div className="border-[1px] border-gray-300 rounded-full w-[940px] h-[940px] flex items-center justify-center">
          <div className="border-[1px] border-gray-300 rounded-full w-[540px] h-[540px] flex items-center justify-center">
            <div className="border-[1px] border-gray-300 rounded-full w-[340px] h-[340px] flex items-center justify-center">
              <div className="border-[1px] border-gray-300 rounded-full w-[140px] h-[140px] bg-white flex items-center justify-center ">
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
