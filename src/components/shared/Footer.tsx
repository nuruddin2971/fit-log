import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <div>
      <hr className="border-neutral-content opacity-10" />
      <div className="w-11/12 sm:w-10/12 mx-auto p-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <h2 className="flex items-center gap-2 font-bold">
            <span className="-rotate-45">
              <Image src={logo} alt="fit log logo" width={20} height={20} />
            </span>{" "}
            FITLOG
          </h2>
          <p className="text-[#6B7280]">
            &copy; 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
