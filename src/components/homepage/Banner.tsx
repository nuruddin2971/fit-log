import Image from "next/image";
import React from "react";
import banner from "@/assets/banner.png";

const Banner = () => {
  return (
    <div className="my-10">
      <div className="w-10/12 mx-auto flex flex-col lg:flex-row justify-between items-center bg-[#15171D] rounded-2xl p-6 sm:p-10 lg:p-14 gap-8">
        <div className="space-y-4 text-center lg:text-left">
          <p className="font-bold text-[#C2F800] text-sm sm:text-base">
            WORKOUT LIBRARY
          </p>
          <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-6xl leading-tight">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h2>
          <p className="text-[#9CA3AF] text-sm sm:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>
          <button className="btn bg-[#C2F800] text-black font-bold px-6 py-3 rounded-xl border-none">
            BROWSE WORKOUTS
          </button>
        </div>
        <div className="w-full lg:w-auto flex justify-center">
          <Image
            src={banner}
            alt="banner-logo"
            className="max-w-xs sm:max-w-sm lg:max-w-md h-auto object-contain"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Banner;
