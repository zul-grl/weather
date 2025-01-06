"use client";
import Border from "./components/Border";
import Left from "./components/LeftSide";
import Right from "./components/RightSide";
export default function Home() {
  return (
    <div className="relative">
      <Border />
      <div className="flex absolute z-10">
        <Left />
        <Right />
      </div>
    </div>
  );
}
