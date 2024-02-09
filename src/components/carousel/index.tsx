"use client";
import { useState } from "react";

type CarouselProps = {
  map: React.ReactNode,
  slides: string[],
};

const Carousel: React.FC<CarouselProps> = ({ map, slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prev = () =>
    setCurrentSlide((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurrentSlide((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {map}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-xl shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          left
        </button>
        <button
          onClick={next}
          className="p-1 rounded-xl shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          right
        </button>
      </div>
    </div>
  );
};

export default Carousel;
