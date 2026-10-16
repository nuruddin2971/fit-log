"use client";
import { TCard } from "@/types/card.type";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export const CardContext = createContext({});

const CardProvider = ({ children }: { children: ReactNode }) => {
  const [todayPlan, setTodayPlan] = useState([]);
  const [savedItems, setSavedItems] = useState([]);

  const handleRemoveFromTodayPlan = (id: number | string) => {
    const remainingTodayPlan = todayPlan.filter(
      (card: TCard) => card.id !== id,
    );

    setTodayPlan(remainingTodayPlan);
  };

  const handleRemoveFromSaved = (id: number | string) => {
    const remainingSaved = savedItems.filter((card: TCard) => card.id !== id);

    setSavedItems(remainingSaved);
  };

  const sharedData = {
    todayPlan,
    setTodayPlan,
    savedItems,
    setSavedItems,
    handleRemoveFromTodayPlan,
    handleRemoveFromSaved,
  };

  return (
    <CardContext.Provider value={sharedData}>{children}</CardContext.Provider>
  );
};

export default CardProvider;
