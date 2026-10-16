"use client";
import { CardContext } from "@/context/CardContext";
import { TCard } from "@/types/card.type";
import React, { useContext } from "react";
import { FaCalendarPlus } from "react-icons/fa";
import { toast } from "react-toastify";

interface SavedItemsBtnProps {
  card: TCard;
}

const TodayPlanBtn = ({ card }: SavedItemsBtnProps) => {
  const { todayPlan, setTodayPlan } = useContext(CardContext) as {
    todayPlan: TCard[];
    setTodayPlan: React.Dispatch<React.SetStateAction<TCard[]>>;
  };

  const handleTodayPlanBtn = () => {
    const isAlreadyAdded = todayPlan.some((item: TCard) => item.id === card.id);
    if (isAlreadyAdded) {
      toast.error("Already in your plan!");
      return;
    }

    setTodayPlan([...todayPlan, card]);
    toast.success(`You have added "${card.name}"`);
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
