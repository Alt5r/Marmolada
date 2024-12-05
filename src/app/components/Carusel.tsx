'use client';

import { useState } from 'react';

export default function Carusel() {
  const images = Array.from({ length: 28 }, (_, i) => {
    const ext =
      i + 1 === 8
        ? 'png'
        : [2, 3, 4, 5, 6, 7, 9, 10].includes(i + 1)
        ? 'jpeg'
        : 'jpg';
    return `/printmaking/${i + 1}.${ext}`;
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div style={{ backgroundColor: '#bcc5d1' }}>
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative" style={{ backgroundColor: '#bcc5d1' }}>
      <div className="relative w-full max-w-3xl max-h-screen" style={{ backgroundColor: '#bcc5d1' }}>
        <div className="carousel w-full h-full" style={{ backgroundColor: '#bcc5d1' }}>
          <div className="carousel-item w-full h-full" style={{ backgroundColor: '#bcc5d1' }}>
            <img
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 focus:outline-none"
        >
          &#10094; {/* Left Arrow */}
        </button>
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 focus:outline-none"
        >
          &#10095; {/* Right Arrow */}
        </button>
      </div>
    </div>
    </div>
  );
}
