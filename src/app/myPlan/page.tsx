"use client";
import { CardContext } from "@/context/CardContext";
import React, { useContext } from "react";

const MyPlanePage = () => {
  const { todayPlan, savedItems } = useContext(CardContext);
  console.log(todayPlan, savedItems, "todayPlan", "savedItems");
  return <div>Installation</div>;
};

export default MyPlanePage;
