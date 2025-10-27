"use client";
import React, { useState, useRef, useEffect } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap"
});

export default function TabsWidget() {
  const [active, setActive] = useState("rec");
  const [hovered, setHovered] = useState(null);
  const tabRefs = useRef([]);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [hoverIndicatorStyle, setHoverIndicatorStyle] = useState({});

  const tabs = [
    { id: "about", label: "About Me" },
    { id: "exp", label: "Experiences" },
    { id: "rec", label: "Recommended" }
  ];

  const content = {
    about: `Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.

I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4 year old twin daughters — Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9–10 AM. This is a...`,
    exp: `Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.

I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4 year old twin daughters — Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9–10 AM. This is a.`,
    rec: `Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.

I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4 year old twin daughters — Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9–10 AM. This is a.`
  };

  useEffect(() => {
    const current = tabRefs.current[tabs.findIndex((t) => t.id === active)];
    if (current) {
      const { offsetLeft, offsetWidth } = current;
      setIndicatorStyle({
        left: offsetLeft + 4,
        width: offsetWidth - 8
      });
    }
  }, [active]);

  useEffect(() => {
    if (hovered !== null) {
      const current = tabRefs.current[hovered];
      if (current) {
        const { offsetLeft, offsetWidth } = current;
        setHoverIndicatorStyle({
          left: offsetLeft + 4,
          width: offsetWidth - 8
        });
      }
    } else {
      setHoverIndicatorStyle({});
    }
  }, [hovered]);

  return (
    <section
      className={`${plusJakarta.className} relative bg-[#2C2E34] text-[#969696] rounded-[18px] p-6 shadow-[0_16px_30px_rgba(0,0,0,0.55)] text-[20px] leading-[100%] tracking-[0] font-normal h-[316px]`}
    >
      <div className="flex h-full">
        {/* Left vertical icons */}
        <div className="flex flex-col items-center gap-22 mr-4">
          <img
            src="/question-mark.png"
            alt="question mark"
            className="w-6 h-6 rounded-full"
          />

          <img src="/dragger-icon.png" alt="drag icon" className="w-6 h-6" />
        </div>

        {/* Right section*/}
        <div className="flex-1 flex flex-col">
          <div className="rounded-[10px] h-[49px] flex items-center gap-[6px] bg-[#171717] relative mb-4">
            <span
              className="absolute top-1 bottom-1 bg-[#28292f] rounded-[14px] shadow-[inset_0_6px_14px_rgba(255,255,255,0.03),0_8px_18px_rgba(0,0,0,0.6)] transition-all duration-300 ease-in-out z-0"
              style={indicatorStyle}
            />

            {hovered !== null && (
              <span
                className="absolute top-1 bottom-1 bg-[#28292f] rounded-[14px] opacity-40 transition-all duration-300 ease-in-out z-0"
                style={hoverIndicatorStyle}
              />
            )}

            {tabs.map((t, index) => (
              <button
                key={t.id}
                ref={(el) => (tabRefs.current[index] = el)}
                onClick={() => setActive(t.id)}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className="relative flex-1 h-[49px] gap-[10px] px-4 py-2.5 rounded-[16px] text-[16px] leading-[100%] font-medium transition-all duration-150 focus:outline-none whitespace-nowrap z-10 text-white"
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="flex-1 max-h-[200px] overflow-y-auto pr-3 text-[20px] leading-[100%] tracking-[0] font-normal text-[#969696]">
            <p className="whitespace-pre-line">{content[active]}</p>
          </div>
        </div>
      </div>

      <div className="hidden md:block absolute right-3 top-24 w-3 h-16 rounded-full overflow-hidden">
        <div
          className="w-full h-full rounded-full"
          style={{
            background: "linear-gradient(180deg, #888989 5.6%, #4A4E54 93.28%)",
            boxShadow: "inset 0 2px 4px rgba(255,255,255,0.2)",
            opacity: 0.6
          }}
        />
      </div>
    </section>
  );
}
