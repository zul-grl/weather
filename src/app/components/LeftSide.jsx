import Search from "./Search";

const Left = (props) => {
  return (
    <div className="w-1/2 h-full bg-[#F3F4F6)] relative">
      <img
        alt=""
        src="./Group2.svg"
        className=" absolute inset-0 left-[300px] top-[150px] w-[176px] h-[176px] object-fit: cover;"
      ></img>
      <Search />
    </div>
  );
};
export default Left;
