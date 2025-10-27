"use client";
import React from "react";

export default function DecorativeScrollbar() {
  return (
    <div className="hidden md:block absolute right-3 top-24 w-3 h-16 rounded-full overflow-hidden transition-all duration-500">
      <div
        className="w-full h-full rounded-full"
        style={{
          background: "linear-gradient(180deg, #8b8b8b 5.6%, #4d5156 93.28%)",
          boxShadow: "inset 0 2px 4px rgba(255,255,255,0.2)",
          opacity: 0.6,
        }}
      />
    </div>
  );
}
