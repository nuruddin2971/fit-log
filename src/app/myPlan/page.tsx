"use client";
import LibraryCard from "@/components/shared/LibraryCard";
import { CardContext } from "@/context/CardContext";
import { TCard } from "@/types/card.type";
import Image from "next/image";
import Link from "next/link";

import React, { useContext, useState } from "react";
import { AiOutlineFire } from "react-icons/ai";
import { FaCheck, FaClock, FaRegStar } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const MyPlanPage = () => {
  const {
    todayPlan,
    savedItems,
    handleRemoveFromTodayPlan,
    handleRemoveFromSaved,
  } = useContext(CardContext);

  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
    "duration",
  );

  const sortCards = (cards: TCard[]) => {
    const sortedCards = [...cards];

    if (sortBy === "duration") {
      sortedCards.sort((a, b) => b.duration - a.duration);
    } else if (sortBy === "calories") {
      sortedCards.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else if (sortBy === "rating") {
      sortedCards.sort((a, b) => b.rating - a.rating);
    }
    return sortedCards;
  };

  const sortedTodayPlan = sortCards(todayPlan);
  const sortedSavedItems = sortCards(savedItems);

  // console.log(sortedTodayPlan, "sortedTodayPlan");
  // console.log(sortedSavedItems, "sortedSavedItems");

  const [isSaved, setIsSaved] = useState(false);

  const totalTodaysPlanDuration = todayPlan.reduce(
    (total: number, card: TCard) => total + (card.duration || 0),
    0,
  );

  const totalTodaysPlanCalories = todayPlan.reduce(
    (total: number, card: TCard) => total + (card.caloriesBurned || 0),
    0,
  );

  const totalSavedDuration = savedItems.reduce(
    (total: number, card: TCard) => total + (card.duration || 0),
    0,
  );

  const totalSavedCalories = savedItems.reduce(
    (total: number, card: TCard) => total + (card.caloriesBurned || 0),
    0,
  );

  return (
    <div className="bg-[#0F1115]">
      <div className="w-10/12 mx-auto my-12 text-white space-y-8">
        <div>
          <h1 className="text-3xl font-extrabold tracking-wider uppercase">
            My Plan
          </h1>
          <p className="text-[#9CA3AF] text-sm mt-1">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {isSaved ? (
          <div className="flex justify-around items-center bg-[#13161D] p-4 rounded-2xl border border-gray-700 w-full">
            <div className="flex flex-col">
              <span className="text-gray-400 text-sm">Exercises</span>
              <span className="text-white text-3xl font-bold">
                {savedItems.length}
              </span>
            </div>

            <div className="flex flex-col border-l border-gray-700 pl-16">
              <span className="text-gray-400 text-sm">Minutes</span>
              <span className="text-white text-3xl font-bold">
                {totalSavedDuration}
              </span>
            </div>

            <div className="flex flex-col border-l border-gray-700 pl-16">
              <span className="text-gray-400 text-sm">Calories</span>
              <span className="text-white text-3xl font-bold">
                {totalSavedCalories}
              </span>
            </div>
          </div>
        ) : (
          <div className="flex justify-around items-center bg-[#13161D] p-4 rounded-2xl border border-gray-700 w-full">
            <div className="flex flex-col">
              <span className="text-gray-400 text-sm">Exercises</span>
              <span className="text-white text-3xl font-bold">
                {todayPlan.length}
              </span>
            </div>

            <div className="flex flex-col border-l border-gray-700 pl-16">
              <span className="text-gray-400 text-sm">Minutes</span>
              <span className="text-white text-3xl font-bold">
                {totalTodaysPlanDuration}
              </span>
            </div>

            <div className="flex flex-col border-l border-gray-700 pl-16">
              <span className="text-gray-400 text-sm">Calories</span>
              <span className="text-white text-3xl font-bold">
                {totalTodaysPlanCalories}
              </span>
            </div>
          </div>
        )}

        <div className="relative w-full">
          <div className="absolute top-0 right-0 z-10 flex items-center gap-3 text-sm">
            <span className="text-[#9CA3AF]">Sort By</span>
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as "duration" | "calories" | "rating")
              }
              className="bg-[#13161D] text-white border border-gray-800 px-4 py-2 rounded-xl focus:outline-none cursor-pointer"
            >
              <option value={"duration"}>Duration</option>
              <option value={"calories"}>Calories</option>
              <option value={"rating"}>Rating</option>
            </select>
          </div>

          <div className="tabs tabs-lift">
            <input
              type="radio"
              name="my_tabs_3"
              className="tab text-[#9CA3AF] checked:text-white font-medium rounded-xl"
              aria-label="Today's Plan"
              defaultChecked
              onChange={() => setIsSaved(false)}
            />

            <div className="tab-content bg-[#121215] border-none pt-6 space-y-4">
              {sortedTodayPlan.length > 0 ? (
                sortedTodayPlan.map((card: TCard, index: number) => (
                  <div
                    key={card.id || index}
                    className="flex items-center justify-between bg-[#1a1a1e] p-4 rounded-2xl border border-white/5"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative w-24 h-16 rounded-xl overflow-hidden shrink-0">
                        <Image
                          src={card.image}
                          alt={card.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-extrabold text-lg uppercase tracking-wide text-white">
                          {card.name}
                        </h3>
                        <p className="text-xs text-[#9CA3AF]">
                          {card.equipment}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-[#9CA3AF] pt-1">
                          <span className="flex items-center gap-1">
                            <FaClock className="text-xs" /> {card.duration} min
                          </span>
                          <span className="flex items-center gap-1">
                            <AiOutlineFire className="text-xs" />{" "}
                            {card.caloriesBurned} kcal
                          </span>
                          <span className="flex items-center gap-1">
                            <FaRegStar className="text-xs" /> {card.rating}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Link href={`/workouts/${card.id}`}>
                        <button className="btn btn-sm bg-[#25252b] hover:bg-[#2e2e36] text-white border-white/10 rounded-xl font-medium px-4">
                          View Details
                        </button>
                      </Link>

                      <button
                        onClick={() => handleRemoveFromTodayPlan(card.id)}
                        className="btn btn-sm bg-[#C2F800] hover:bg-[#000000] text-white border-white/10 rounded-xl font-medium px-4"
                      >
                        <span>
                          <GiCheckMark />
                        </span>
                        Mark as Done
                      </button>

                      <button
                        onClick={() => handleRemoveFromTodayPlan(card.id)}
                        className="text-[#9CA3AF] hover:text-white p-2 transition cursor-pointer"
                      >
                        <RxCross2 className="text-lg" />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="border border-dashed border-white/15 rounded-2xl p-16 text-center bg-[#1a1a1e]/30 flex flex-col items-center justify-center space-y-3">
                  <h3 className="font-extrabold text-xl tracking-wide uppercase text-white">
                    NOTHING HERE YET
                  </h3>
                  <p className="text-[#9CA3AF] text-sm">
                    Browse the library and add a lift to get today moving.
                  </p>
                </div>
              )}
            </div>

            <input
              type="radio"
              name="my_tabs_3"
              className="tab text-[#9CA3AF] checked:text-white font-medium rounded-xl"
              aria-label="Saved"
              onChange={() => setIsSaved(true)}
            />
            <div className="tab-content bg-[#121215] border-none pt-6 space-y-4">
              {sortedSavedItems.length > 0 ? (
                sortedSavedItems.map((card: TCard, index: number) => (
                  <div
                    key={card.id || index}
                    className="flex items-center justify-between bg-[#1a1a1e] p-4 rounded-2xl border border-white/5"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative w-24 h-16 rounded-xl overflow-hidden shrink-0">
                        <Image
                          src={card.image}
                          alt={card.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-extrabold text-lg uppercase tracking-wide text-white">
                          {card.name}
                        </h3>
                        <p className="text-xs text-[#9CA3AF]">
                          {card.equipment}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-[#9CA3AF] pt-1">
                          <span className="flex items-center gap-1">
                            <FaClock className="text-xs" /> {card.duration} min
                          </span>
                          <span className="flex items-center gap-1">
                            <AiOutlineFire className="text-xs" />{" "}
                            {card.caloriesBurned} kcal
                          </span>
                          <span className="flex items-center gap-1">
                            <FaRegStar className="text-xs" /> {card.rating}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Link href={`/workouts/${card.id}`}>
                        <button className="btn btn-sm bg-[#25252b] hover:bg-[#2e2e36] text-white border-white/10 rounded-xl font-medium px-4">
                          View Details
                        </button>
                      </Link>
                      <button
                        onClick={() => handleRemoveFromSaved(card.id)}
                        className="text-[#9CA3AF] hover:text-white p-2 transition cursor-pointer"
                      >
                        <RxCross2 className="text-lg" />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="border border-dashed border-white/15 rounded-2xl p-16 text-center bg-[#1a1a1e]/30 flex flex-col items-center justify-center space-y-3">
                  <h3 className="font-extrabold text-xl tracking-wide uppercase text-white">
                    NOTHING HERE YET
                  </h3>
                  <p className="text-[#9CA3AF] text-sm">
                    Browse the library and add a lift to get today moving.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlanPage;
