'use client';

import useMasonry from "./useMasonry";

export default function MasonryPage() {
  const masonryContainer = useMasonry();

  const images = [
    '/PaintingLarger/1.png',
    '/PaintingLarger/2.png',
    '/PaintingLarger/3.png',
    '/PaintingLarger/4.png',
    '/PaintingLarger/5.png',
    '/PaintingLarger/6.png',
    '/PaintingLarger/7.png',
    '/PaintingLarger/8.png',
    // Add more images as necessary
  ];

  return (
    <div
      ref={masonryContainer}
      className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6"
    >
      {images.map((src, index) => (
        <div key={index} className="masonry-item">
          <img
            src={src}
            alt={`Painting ${index + 1}`}
            className="w-full h-auto block rounded-lg"
          />
        </div>
      ))}
    </div>
  );
}


