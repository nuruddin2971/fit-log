"use client";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { FaCalendarPlus, FaRegBookmark } from "react-icons/fa";
import { CardContext } from "@/context/CardContext";
import { useContext } from "react";
import { usePathname } from "next/navigation";
import { TCard } from "@/types/card.type";

const Navbar = () => {
  const { todayPlan, savedItems } = useContext(CardContext) as {
    todayPlan: TCard[];
    savedItems: TCard[];
  };
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-50 bg-[#121215] text-white">
      <nav className="w-11/12 sm:w-10/12 mx-auto flex flex-col sm:flex-row justify-between items-center py-4 gap-4 sm:gap-0">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-bold text-xl tracking-wider"
        >
          <span className="text-[#b5e742]">
            <Image
              src={logo}
              alt="fit log logo"
              width={24}
              height={24}
              className="object-contain"
            />
          </span>
          FITLOG
        </Link>

        <div className="flex items-center gap-2">
          <Link href="/">
            <button
              className={`btn btn-sm text-white border-white/10 rounded-full px-4 normal-case font-normal transition ${
                pathname === "/"
                  ? "bg-[#25252b] border-[#b5e742]"
                  : "bg-[#1a1a1e] hover:bg-[#25252b]"
              }`}
            >
              <span
                className={`flex items-center font-medium ${
                  pathname === "/" ? "text-[#b5e742]" : "text-[#9CA3AF]"
                }`}
              >
                Workouts
              </span>
            </button>
          </Link>

          <Link href="/myPlan">
            <button
              className={`btn btn-sm text-white border-white/10 rounded-full px-4 normal-case font-normal transition ${
                pathname === "/myPlan"
                  ? "bg-[#25252b] border-[#b5e742]"
                  : "bg-[#1a1a1e] hover:bg-[#25252b]"
              }`}
            >
              <span
                className={`flex items-center font-medium ${
                  pathname === "/myPlan" ? "text-[#b5e742]" : "text-[#9CA3AF]"
                }`}
              >
                My Plan
              </span>
            </button>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/myPlan">
            <button className="btn btn-sm bg-[#1a1a1e] hover:bg-[#25252b] text-white border-white/10 rounded-full px-4 normal-case font-normal">
              <span className="text-[#9CA3AF] flex items-center gap-1.5">
                <FaCalendarPlus className="text-xs" /> Plan
              </span>
              <span className="bg-[#ccff00] border border-white/20 text-[#000000] font-bold px-2 py-0.5 rounded-full text-xs">
                {todayPlan.length}
              </span>
            </button>
          </Link>
          <Link href="/myPlan">
            <button className="btn btn-sm bg-[#1a1a1e] hover:bg-[#25252b] text-white border-white/10 rounded-full px-4 normal-case font-normal">
              <span className="text-[#9CA3AF] flex items-center gap-1.5">
                <FaRegBookmark className="text-xs" /> Saved
              </span>
              <span className="bg-transparent border border-white/20 text-[#9CA3AF] font-bold px-2 py-0.5 rounded-full text-xs">
                {savedItems.length}
              </span>
            </button>
          </Link>
        </div>
      </nav>
      <hr className="border-white/5" />
    </div>
  );
};

export default Navbar;
