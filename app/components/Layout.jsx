import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export default function Layout({ children }) {
  return (
    <div
      className={`${plusJakarta.className} min-h-screen w-full bg-[#1E1F25] 
      flex justify-center items-start pt-12 px-8 
      text-[20px] font-normal leading-[100%] tracking-[0] text-[#EDEDED]`}
    >
      {/* left side */}
      <div className="hidden md:block md:w-1/2" aria-hidden="true"></div>

     {/* right side */}
      <div className="w-full md:w-1/2 flex flex-col gap-8 max-w-[720px]">
        {children}
      </div>
    </div>
  );
}
