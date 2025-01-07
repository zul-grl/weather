"use client";
import Border from "./components/Border";
import Left from "./components/LeftSide";
import Right from "./components/RightSide";
export default function Home() {
  return (
    <div className="relative w-full h-full">
      <div className="w-full h-screen">
        <Border />
        <div className="w-full h-full flex">
          <Left />
          <Right />
        </div>
      </div>
    </div>
  );
}
