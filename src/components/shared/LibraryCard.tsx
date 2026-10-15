"use client";
import { TCard } from "@/types/card.type";
import Image from "next/image";
import { useRouter } from "next/navigation";

import React from "react";
import { AiOutlineFire } from "react-icons/ai";
import { FaClock } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";

type TCardProps = {
  card: TCard;
  ind?: number;
};

const LibraryCard = ({ card }: TCardProps) => {
  const router = useRouter();
  const handleNavigate = (id: number) => {
    router.push(`/workouts/${id}`);
  };
  return (
    <div
      onClick={() => handleNavigate(card.id)}
      className="card w-full bg-[#1a1a1e] rounded-[10px] overflow-hidden shadow-lg cursor-pointer border border-transparent hover:border-[#b5e742] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
    >
      <div className="relative aspect-[16/10]">
        <Image
          src={card.image}
          alt={card.name}
          layout="fill"
          objectFit="cover"
          className="rounded-[10px]"
        />
      </div>
      <div className="card-body mt-4 p-4 space-y-4">
        <div className="card-actions flex flex-wrap gap-1">
          {card.muscleGroups.map((group, index) => (
            <span
              key={index}
              className="badge badge-accent bg-[#b5e742] text-[#1a1a1e] border-none font-semibold px-4 py-1.5 text-xs rounded-full"
            >
              {group.toUpperCase()}
            </span>
          ))}
        </div>
        <div className="space-y-1">
          <h2 className="card-title text-2xl font-bold uppercase text-neutral-content">
            {card.name}
          </h2>
          <p className="text-sm text-neutral-content opacity-70">
            {card.equipment}
          </p>
        </div>
        <hr className="border-neutral-content opacity-10" />
        <div className="flex justify-between items-center text-neutral-content opacity-70 pt-2 text-sm">
          <span className="flex items-center gap-2">
            <FaClock className="text-sm" /> {card.duration} min
          </span>
          <span className="flex items-center gap-2">
            <AiOutlineFire className="text-base" /> {card.caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-2">
            <FaRegStar className="text-sm" /> {card.rating}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LibraryCard;
