"use client";
import React from "react";

export default function IconButton({ children, onClick, disabled = false, ariaLabel }) {
  return (
    <button
      type="button"
      onClick={(e) => {
        if (disabled) return;
        if (typeof onClick === "function") onClick(e);
      }}
      aria-label={ariaLabel || "icon-button"}
      disabled={disabled}
      className={`w-9 h-9 rounded-full
        ${disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}
        bg-[#2a2d33]/60 backdrop-blur-md border border-white/10 
        flex items-center justify-center text-white text-sm 
        shadow-[inset_0_6px_14px_rgba(255,255,255,0.05),0_8px_18px_rgba(0,0,0,0.6)]
        transition-all duration-300 ease-in-out
        ${disabled ? "" : "hover:translate-y-[-1px] hover:bg-[#3a3d42]/70 active:translate-y-[1px]"}
      `}
    >
      {children}
    </button>
  );
}
