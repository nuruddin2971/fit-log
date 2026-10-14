"use client";
import { CardContext } from "@/context/CardContext";
import Link from "next/link";
import React, { useContext } from "react";
import { FaArrowRight } from "react-icons/fa";

const MyPlanePage = () => {
  const { todayPlan, savedItems } = useContext(CardContext);
  console.log(todayPlan, savedItems, "todayPlan", "savedItems");
  return (
    <div className="w-10/12 mx-auto my-12 text-white space-y-8">
      {/* Header */}
      <div>
        <h2 className="font-extrabold text-3xl tracking-tight">MY PLAN</h2>
        <p className="text-[#9CA3AF] text-sm mt-1">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Stats Section */}
      <div>
        <div className="stats shadow bg-[#1a1a1e] border border-white/5 w-full rounded-2xl py-6">
          <div className="stat place-items-center">
            <div className="stat-title text-[#9CA3AF] text-xs font-semibold uppercase tracking-wider">
              Exercises
            </div>
            <div className="stat-value text-4xl font-extrabold text-[#b5e742] mt-1">
              0
            </div>
          </div>

          <div className="stat place-items-center border-l border-white/10">
            <div className="stat-title text-[#9CA3AF] text-xs font-semibold uppercase tracking-wider">
              Minutes
            </div>
            <div className="stat-value text-4xl font-extrabold text-white mt-1">
              0
            </div>
          </div>

          <div className="stat place-items-center border-l border-white/10">
            <div className="stat-title text-[#9CA3AF] text-xs font-semibold uppercase tracking-wider">
              Calories
            </div>
            <div className="stat-value text-4xl font-extrabold text-white mt-1">
              0
            </div>
          </div>
        </div>
      </div>

      {/* Tabs & Sort Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* DaisyUI Tabs Box */}
        <div className="tabs tabs-box bg-[#1a1a1e] p-1.5 rounded-xl border border-white/5 flex gap-1">
          <input
            type="radio"
            name="my_tabs_1"
            className="tab text-[#9CA3AF] [--tab-bg:#25252b] [--tab-border-color:transparent] rounded-lg font-medium text-sm px-6 py-2 transition-all"
            aria-label="Today’s Plan"
            defaultChecked
          />
          <input
            type="radio"
            name="my_tabs_1"
            className="tab text-[#9CA3AF] [--tab-bg:#25252b] [--tab-border-color:transparent] rounded-lg font-medium text-sm px-6 py-2 transition-all"
            aria-label="Saved"
          />
        </div>

        {/* Sort By Dropdown */}
        <fieldset className="fieldset flex items-center gap-3 w-full sm:w-auto justify-end">
          <legend className="fieldset-legend text-sm text-[#9CA3AF]">
            Sort By
          </legend>
          <select
            defaultValue="Duration"
            className="select bg-[#1a1a1e] text-white border border-white/10 rounded-xl px-10 py-2 text-sm focus:outline-none focus:border-[#b5e742]"
          >
            <option>Duration</option>
            <option>Calories</option>
            <option>Rating</option>
          </select>
        </fieldset>
      </div>

      {/* Empty State / Content Placeholder */}
      <div className="border border-dashed border-white/15 rounded-2xl p-20 text-center bg-[#1a1a1e]/30 flex flex-col items-center justify-center space-y-4">
        <h3 className="font-extrabold text-xl tracking-wide uppercase text-white">
          NOTHING HERE YET
        </h3>
        <p className="text-[#9CA3AF] text-sm max-w-sm">
          Browse the library and add a lift to get today moving.
        </p>
        <Link href="/">
          <button className="btn bg-[#b5e742] hover:bg-[#a2d435] text-[#121215] font-bold px-6 py-3 rounded-xl border-none mt-2 flex items-center gap-2">
            Go to workouts <FaArrowRight className="text-xs" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MyPlanePage;
