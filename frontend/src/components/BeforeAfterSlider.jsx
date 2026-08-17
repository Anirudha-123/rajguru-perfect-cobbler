import React, { useState, useRef } from "react";

export default function BeforeAfterSlider({ beforeImage, afterImage, title }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!isDragging && e.type !== "mousemove") return;
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    let position = (x / rect.width) * 100;

    if (position < 0) position = 0;
    if (position > 100) position = 100;

    setSliderPosition(position);
  };

  const handleTouchMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    let position = (x / rect.width) * 100;

    if (position < 0) position = 0;
    if (position > 100) position = 100;

    setSliderPosition(position);
  };

  return (
    <div className="bg-[#1c1410] border border-[#a37c52]/30 rounded-xl p-4 shadow-xl text-[#f4ebd0] flex flex-col items-center">
      <h3 className="font-serif text-lg font-bold mb-3 tracking-wide">
        {title}
      </h3>

      <div
        ref={containerRef}
        className="relative w-full h-72 sm:h-80 overflow-hidden rounded-lg cursor-ew-resize select-none"
        onMouseMove={handleMouseMove}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
      >
        {/* AFTER IMAGE (Background) */}
        <img
          src={afterImage}
          alt="After Restoration"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <span className="absolute top-3 right-3 bg-black/70 text-[#f4ebd0] text-[10px] uppercase px-2 py-1 rounded tracking-widest border border-[#a37c52]/40 z-10">
          After
        </span>

        {/* BEFORE IMAGE (Clipped on top) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt="Before Restoration"
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{
              width: containerRef.current
                ? `${containerRef.current.offsetWidth}px`
                : "100%",
            }}
          />
          <span className="absolute top-3 left-3 bg-black/70 text-[#f4ebd0] text-[10px] uppercase px-2 py-1 rounded tracking-widest border border-[#a37c52]/40 z-10">
            Before
          </span>
        </div>

        {/* DIVIDER LINE & HANDLE */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-[#a37c52] cursor-ew-resize z-20"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#1c1410] border-2 border-[#a37c52] flex items-center justify-center shadow-lg text-[#a37c52]">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                transform="rotate(90 12 12)"
              />
            </svg>
          </div>
        </div>
      </div>
      <p className="text-[11px] text-gray-400 mt-2 italic">
        Drag or slide left & right to witness the transformation
      </p>
    </div>
  );
}
