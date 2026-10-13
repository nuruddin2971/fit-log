import Image from "next/image";
import React from "react";
import banner from "@/assets/banner.png";

const Banner = () => {
  return (
    <div className="my-10">
      <div className="w-10/12 mx-auto flex justify-between items-center border-2 p-14">
        <div className="space-y-4">
          <p className="font-bold text-[#C2F800]">WORKOUT LIBRARY</p>
          <h2 className="font-extrabold text-6xl">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h2>
          <p className="text-[#9CA3AF]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>
          <button className="btn bg-[#C2F800] text-black">BROWSE WORKOUTS</button>
        </div>
        <div>
          <Image src={banner} alt="banner-logo"></Image>
        </div>
      </div>
    </div>
  );
};

export default Banner;
