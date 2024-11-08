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
      // Add more images here as needed
    ];
  
    return (
      <div
        ref={masonryContainer}
        className="relative w-full mx-auto my-8"
        style={{ position: 'relative' }} // Make sure the container has a relative position.
      >
        {images.map((src, index) => (
          <div key={index} className="masonry-item" style={{ width: '33.333%' }}>
            <img
              src={src}
              alt={`Painting ${index + 1}`}
              className="w-full h-auto block border-2 rounder-lg border-slate-600"
            />
          </div>
        ))}
      </div>
    );
  }