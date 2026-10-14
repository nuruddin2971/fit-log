"use client";
import React, { createContext, ReactNode, useState } from "react";

export const CardContext = createContext({});

const CardProvider = ({ children }: { children: ReactNode }) => {
  const [todayPlan, setTodayPlan] = useState([]);
  const [savedItems, setSavedItems] = useState([]);

  const sharedData = {
    todayPlan,
    setTodayPlan,
    savedItems,
    setSavedItems,
  };

  return (
    <CardContext.Provider value={sharedData}>{children}</CardContext.Provider>
  );
};

export default CardProvider;
