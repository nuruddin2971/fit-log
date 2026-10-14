import SavedItemsBtn from "@/components/cardDetails/SavedItemsBtn";
import TodayPlanBtn from "@/components/cardDetails/TodayPlanBtn";
import { getAllData } from "@/lib/card";
import { TCard } from "@/types/card.type";
import Image from "next/image";
import React from "react";
import { FaCalendarPlus, FaRegBookmark, FaRegStar } from "react-icons/fa";

type TCardDetailsProps = {
  params: {
    id: string;
  };
};

const CardDetailsPage = async ({ params }: TCardDetailsProps) => {
  const { id } = await params;
  const data = await getAllData();

  const card = data.find((card: TCard) => card.id === Number(id));

  if (!card) {
    return (
      <div className="w-10/12 mx-auto py-20 text-center text-white">
        <h2 className="text-2xl font-bold">Card not found</h2>
      </div>
    );
  }

  return (
    <div className="w-10/12 mx-auto my-12 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Column: Big Image */}
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xl bg-[#1a1a1e]">
          <Image
            src={card.image}
            alt={card.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Column: Details & Specs */}
        <div className="flex flex-col space-y-6">
          {/* Title & Description */}
          <div>
            <h1 className="text-3xl lg:text-4xl font-extrabold uppercase tracking-wide">
              {card.name}
            </h1>
            <p className="text-[#9CA3AF] text-sm mt-2 leading-relaxed">
              {card.description}
            </p>
          </div>

          {/* Muscle Groups Badges */}
          <div className="flex flex-wrap gap-2">
            {card.muscleGroups.map((group: string, index: number) => (
              <span
                key={index}
                className="badge bg-[#b5e742] text-[#1a1a1e] border-none font-semibold px-4 py-3 text-xs rounded-full uppercase"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Specs Table / List */}
          <div className="bg-[#1a1a1e] rounded-xl p-2 divide-y divide-white/5">
            <div className="flex justify-between items-center px-4 py-3 text-sm">
              <span className="text-[#9CA3AF] uppercase text-xs font-semibold tracking-wider">
                Equipment
              </span>
              <span className="font-medium">{card.equipment}</span>
            </div>
            <div className="flex justify-between items-center px-4 py-3 text-sm">
              <span className="text-[#9CA3AF] uppercase text-xs font-semibold tracking-wider">
                Difficulty
              </span>
              <span className="font-medium">{card.difficulty}</span>
            </div>
            <div className="flex justify-between items-center px-4 py-3 text-sm">
              <span className="text-[#9CA3AF] uppercase text-xs font-semibold tracking-wider">
                Sets
              </span>
              <span className="font-medium">{card.sets}</span>
            </div>
            <div className="flex justify-between items-center px-4 py-3 text-sm">
              <span className="text-[#9CA3AF] uppercase text-xs font-semibold tracking-wider">
                Reps
              </span>
              <span className="font-medium">{card.reps}</span>
            </div>
            <div className="flex justify-between items-center px-4 py-3 text-sm">
              <span className="text-[#9CA3AF] uppercase text-xs font-semibold tracking-wider">
                Duration
              </span>
              <span className="font-medium">{card.duration} min</span>
            </div>
            <div className="flex justify-between items-center px-4 py-3 text-sm">
              <span className="text-[#9CA3AF] uppercase text-xs font-semibold tracking-wider">
                Calories
              </span>
              <span className="font-medium">{card.caloriesBurned} kcal</span>
            </div>
            <div className="flex justify-between items-center px-4 py-3 text-sm">
              <span className="text-[#9CA3AF] uppercase text-xs font-semibold tracking-wider">
                Rating
              </span>
              <span className="font-medium flex items-center gap-1">
                <FaRegStar className="text-yellow-400" /> {card.rating}
              </span>
            </div>
          </div>

          {/* Instructions Section */}
          <div className="space-y-3 pt-2">
            <h3 className="font-bold text-sm tracking-wider uppercase text-white">
              Instructions
            </h3>
            <ol className="space-y-2 text-sm text-[#9CA3AF]">
              {card.instructions.map((step: string, index: number) => (
                <li key={index} className="flex gap-3">
                  <span className="text-white font-semibold">{index + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <TodayPlanBtn card={card}></TodayPlanBtn>
            <SavedItemsBtn card={card}></SavedItemsBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetailsPage;
