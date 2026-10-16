import React from "react";

const GlobalLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-[#0F1115] text-white py-20 space-y-4">
      <span className="loading loading-spinner loading-lg text-[#ccff00]"></span>

      <h2 className="font-bold text-2xl sm:text-3xl tracking-wider uppercase text-[#9CA3AF] animate-pulse">
        Loading.....
      </h2>
    </div>
  );
};

export default GlobalLoading;
