import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { FaCalendarPlus, FaRegBookmark } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-[#121215] text-white">
      <nav className="w-10/12 mx-auto flex justify-between items-center py-4">
        {/* Logo / Brand */}
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

        {/* Center Nav Links (Pill Style) */}
        <ul className="flex items-center gap-1 bg-[#1a1a1e] p-1.5 rounded-full border border-white/5 text-sm">
          <li>
            <Link
              href="/"
              className="px-5 py-2 rounded-full font-medium bg-[#b5e742] text-[#121215] transition"
            >
              Workouts
            </Link>
          </li>
          <li>
            <Link
              href="/myPlan"
              className="px-5 py-2 rounded-full font-medium text-[#9CA3AF] hover:text-white transition"
            >
              My Plan
            </Link>
          </li>
        </ul>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3">
          <button className="btn btn-sm bg-[#1a1a1e] hover:bg-[#25252b] text-white border-white/10 rounded-full px-4 normal-case font-normal">
            <span className="text-[#9CA3AF] flex items-center gap-1.5">
              <FaCalendarPlus className="text-xs" /> Plan
            </span>
            <span className="bg-[#b5e742] text-[#121215] font-bold px-2 py-0.5 rounded-full text-xs">
              0
            </span>
          </button>
          <button className="btn btn-sm bg-[#1a1a1e] hover:bg-[#25252b] text-white border-white/10 rounded-full px-4 normal-case font-normal">
            <span className="text-[#9CA3AF] flex items-center gap-1.5">
              <FaRegBookmark className="text-xs" /> Saved
            </span>
            <span className="bg-transparent border border-white/20 text-[#9CA3AF] font-bold px-2 py-0.5 rounded-full text-xs">
              0
            </span>
          </button>
        </div>
      </nav>
      <hr className="border-white/5" />
    </div>
  );
};

export default Navbar;
