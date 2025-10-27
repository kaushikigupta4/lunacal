"use client";
import React from "react";
import IconButton from "./IconButton";

export default function GalleryHeader({
  fileRef,
  onFiles,
  handlePrev,
  handleNext,
  canPrev = true,
  canNext = true,
}) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h3
        className="bg-[#171717] px-5 py-2 rounded-[20px] text-white text-[16px] font-medium 
                     shadow-[inset_0px_4px_10px_2px_rgba(0,0,0,0.25)] leading-[100%] 
                     w-[149px] h-[62px] flex items-center justify-center"
      >
        Gallery
      </h3>

      <div className="flex items-center gap-3">
        {/* Add Image Button */}
        <button
          type="button"
          onClick={() => fileRef?.current?.click()}
          className="flex items-center gap-2 px-[26px] py-[8px] rounded-[20px] text-white text-[12px] h-[46px]
             border border-white/10 backdrop-blur-md
             transition-all duration-300 ease-in-out active:scale-95 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(90,92,96,0.5) 0%, rgba(42,45,51,0.8) 100%)",
            boxShadow:
              "inset 0 3px 6px rgba(255,255,255,0.15), 0 8px 16px rgba(0,0,0,0.5)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background =
              "linear-gradient(180deg, rgba(110,112,116,0.6) 0%, rgba(50,53,59,0.9) 100%)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background =
              "linear-gradient(180deg, rgba(90,92,96,0.5) 0%, rgba(42,45,51,0.8) 100%)";
          }}
        >
          
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-60 transition-opacity duration-500"></span>
          <span className="relative z-10">+ ADD IMAGE</span>
        </button>

        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          multiple
          onChange={onFiles}
          className="hidden"
        />

        {/* Navigation Buttons */}
        <IconButton
          onClick={() => typeof handlePrev === "function" && handlePrev()}
          disabled={!canPrev}
          ariaLabel="previous"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6"></path>
          </svg>
        </IconButton>

        <IconButton
          onClick={() => typeof handleNext === "function" && handleNext()}
          disabled={!canNext}
          ariaLabel="next"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 6 6 6-6 6"></path>
          </svg>
        </IconButton>
      </div>
    </div>
  );
}
