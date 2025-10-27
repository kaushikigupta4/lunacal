"use client";
import React, { useRef, useState } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import GalleryHeader from "./GalleryHeader";
import ImageGrid from "./ImageGrid";
import DecorativeScrollbar from "./DecorativeScrollbar";

const plusJakarta = Plus_Jakarta_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export default function GalleryWidget() {
  const fileRef = useRef(null);
  const [images, setImages] = useState([
    "/placeholder1.png",
    "/placeholder2.png",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;


  const onFiles = (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    const readers = files.map(
      (file) =>
        new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.readAsDataURL(file);
        })
    );

    Promise.all(readers).then((urls) =>
      setImages((prev) => [...prev, ...urls])
    );

    e.target.value = "";
  };


  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      (prev + 1) % images.length
    );
  };


  const visibleImages = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleImages.push(images[(currentIndex + i) % images.length]);
  }

  return (
    <section
      className={`${plusJakarta.className} relative bg-[#2C2E34] text-[#969696] 
      rounded-[18px] p-6 shadow-[0_16px_30px_rgba(0,0,0,0.55)]
      text-[20px] font-normal h-[330px]`}
    >
      <div className="flex h-full">
        {/* Left icons */}
        <div className="flex flex-col items-center gap-22 mr-4">
          <img src="/question-mark.png" alt="question mark" className="w-6 h-6" />
          <div className="flex items-center justify-center cursor-grab">
            <img src="/dragger-icon.png" alt="drag icon" className="w-6 h-6" />
          </div>
        </div>

      
        <div className="flex-1 flex flex-col">
          <GalleryHeader
            fileRef={fileRef}
            onFiles={onFiles}
            handlePrev={handlePrev}
            handleNext={handleNext}
            canPrev={images.length > 1}
            canNext={images.length > 1}
          />
          <ImageGrid visibleImages={visibleImages} />
        </div>
      </div>

      <DecorativeScrollbar />
    </section>
  );
}
