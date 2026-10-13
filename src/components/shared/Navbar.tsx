import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="shadow-sm">
      <nav className="w-10/12 mx-auto flex justify-between items-center py-4 border-2">
        <h2 className="flex items-center gap-2 font-bold text-xl">
          <span>
            <Image src={logo} alt="fit log logo" width={20} height={20} />
          </span>{" "}
          FITLOG
        </h2>
        <ul className="flex items-center gap-4">
          <li>
            <Link href="/" className="font-semibold hover:text-lime-500">
              Workouts
            </Link>
          </li>
          <li>
            <Link href="/myPlan" className="font-semibold hover:text-lime-500">
              My Plan
            </Link>
          </li>
        </ul>
        <div className="flex gap-4">
          <button className="btn hover:text-lime-500">
            Plan <span className="">0</span>
          </button>
          <button className="btn hover:text-lime-500">
            Saved <span>0</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
