"use client";

import React from "react";

// Simplified time formatting without blinking logic
const formatTime = () => {
  const now = new Date();
  now.setMinutes(now.getMinutes() + 10);
  const hours = now.getHours() % 12 || 12;
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const amPm = now.getHours() >= 12 ? "pm" : "am";
  return { hours, minutes, amPm };
};

const Hero = () => {
  const { hours, minutes, amPm } = formatTime();

  return (
    <div className="px-4 py-16 text-center">
      {/* Badge */}
      <div className="flex flex-col items-center gap-y-2 mb-6">
        <a className="flex items-center py-1.5 px-2 rounded-full border border-black/[0.03] bg-[rgba(30,31,37,0.04)] backdrop-blur-[10px] hover:bg-[rgba(30,31,37,0.08)] text-xs font-medium transition-colors duration-150 ease-in-out">
          QSBS just got better in July 2025 →
        </a>
      </div>

      {/* Main Heading */}
      <h1 className="mt-12 text-[#202020] text-center text-6xl font-semibold tracking-tight">
        Magically simplify
        <br />
        accounting and taxes
      </h1>

      {/* Subheading */}
      <p className="text-xl text-slate-600 mb-8 leading-relaxed mt-4">
        Automated bookkeeping, effortless tax filing, real‑time insights.
        <br />
        Set up in 10 mins. Back to building by {hours}
        <span className="animate-[blink_1s_ease-in-out_infinite]">:</span>
        {minutes}
        {amPm}.
      </p>

      {/* CTA Button */}
      <div className="flex justify-center items-center">
        <button className="bg-[#257AF3] hover:bg-[#2362C8] text-white px-4 py-2 rounded-lg font-bold shadow-lg tracking-wide mb-4 transition-colors duration-200 ease-in-out">
          Start free trial
        </button>
        <button className="mb-4 ml-4 rounded-xl px-4 py-2 font-medium transition-colors duration-200 ease-out hover:bg-slate-200">
          Pricing →
        </button>
      </div>

      {/* Additional Info */}
      <p className="text-sm text-gray-400 mt-2 mr-2">
        Currently for US-based Delaware C-Corps.
      </p>
    </div>
  );
};

export default Hero;
