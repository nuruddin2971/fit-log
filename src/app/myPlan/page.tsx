"use client";
import { CardContext } from "@/context/CardContext";
import React, { useContext } from "react";

const MyPlanePage = () => {
  const { todayPlan } = useContext(CardContext);
  console.log(todayPlan, "todayPlan");
  return <div>Installation</div>;
};

export default MyPlanePage;
