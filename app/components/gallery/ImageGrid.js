"use client";
import React from "react";

export default function ImageGrid({ visibleImages }) {
  return (
    <div className="grid grid-cols-3 gap-9 overflow-hidden pr-2 transition-transform duration-500 ease-in-out">
      {visibleImages.map((src, i) => (
        <div
          key={i}
          className="rounded-[14px] overflow-hidden bg-[#222225] 
          shadow-[0_8px_20px_rgba(0,0,0,0.5)] h-[150px] w-[150px]
          transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]
          hover:[transform:perspective(800px)_rotateY(10deg)_rotateX(-3deg)_translateY(-5px)]
          hover:shadow-[0_12px_28px_rgba(0,0,0,0.6)]"
        >
          <img
            src={src}
            alt={`Gallery image ${i + 1}`}
            className="w-full h-full object-cover block transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-[1.08]"
          />
        </div>
      ))}
    </div>
  );
}
