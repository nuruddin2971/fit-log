"use client";
import { CardContext } from "@/context/CardContext";
import { TCard } from "@/types/card.type";
import React, { useContext } from "react";
import { FaCalendarPlus, FaRegBookmark } from "react-icons/fa";

const SavedItemsBtn = ({ card }: { card: TCard }) => {
  const { savedItems, setSavedItems } = useContext(CardContext);

  const handleSavedItemsBtn = () => {
    console.log("handleSavedItemsBtn", card);

    setSavedItems([...savedItems, card]);
    alert(`You have added "${card.name} to your savedItems"`);
  };
  return (
    <div>
      <button
        onClick={() => handleSavedItemsBtn()}
        className="btn bg-[#1a1a1e] hover:bg-[#25252b] text-white border border-white/10 font-medium px-6 rounded-xl"
      >
        <FaRegBookmark /> Save for later
      </button>
    </div>
  );
};

export default SavedItemsBtn;
