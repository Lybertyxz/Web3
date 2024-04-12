// components/Carousel.tsx
import React, { useState } from "react";

interface CarouselProps {
  pictures: string[];
}

const Carousel: React.FC<CarouselProps> = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length
    );
  };

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {pictures.map((picture, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={picture}
              alt={`Slide ${index}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
      <button
        className="absolute left-0 top-1/2 z-10 m-2 -translate-y-1/2 rounded-full bg-black p-3 text-white opacity-60 hover:opacity-100"
        onClick={prevImage}
        aria-label="Previous image"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>
      <button
        className="absolute right-0 top-1/2 z-10 m-2 -translate-y-1/2 rounded-full bg-black p-3 text-white opacity-60 hover:opacity-100"
        onClick={nextImage}
        aria-label="Next image"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
