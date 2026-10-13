import { TCard } from "@/types/card.type";
import Image from "next/image";
import React from "react";
import LibraryCard from "../shared/LibraryCard";
import { getAllData } from "@/lib/card";


const Library = async () => {
  const data = await getAllData();
  // console.log(data, "data");
  return (
    <div className="w-10/12 mx-auto my-10">
      <div className="my-8">
        <h2 className="font-bold text-3xl">THE LIBRARY</h2>
        <p className="text-[#9CA3AF]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Data display vai card */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-between items-center sm:justify-items-start">
        {data.map((card: TCard, ind: number) => {
          return <LibraryCard key={ind} card={card}></LibraryCard>;
        })}
      </div>
    </div>
  );
};

export default Library;
