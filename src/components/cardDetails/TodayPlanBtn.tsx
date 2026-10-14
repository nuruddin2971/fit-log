"use client";
import { CardContext } from "@/context/CardContext";
import { TCard } from "@/types/card.type";
import React, { useContext } from "react";
import { FaCalendarPlus } from "react-icons/fa";

const TodayPlanBtn = ({ card }: { card: TCard }) => {
  const { todayPlan, setTodayPlan } = useContext(CardContext);

  const handleTodayPlanBtn = () => {
    console.log("handleTodayPlan", card);

    setTodayPlan([...todayPlan, card]);
    alert(`You have added "${card.name}"`);
  };
  return (
    <div>
      <button
        onClick={() => handleTodayPlanBtn()}
        className="btn bg-[#b5e742] hover:bg-[#a2d435] text-[#1a1a1e] border-none font-bold px-6 rounded-xl"
      >
        <FaCalendarPlus className="text-lg" /> Add to today's plan
      </button>
    </div>
  );
};

export default TodayPlanBtn;
