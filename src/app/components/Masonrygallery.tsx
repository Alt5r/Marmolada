'use client'
import { useEffect, useRef } from 'react';
//import Masonry from 'masonry-layout';
import dynamic from 'next/dynamic';
// Dynamically import Masonry to ensure it's only loaded on the client side
const Masonry = dynamic(() => import('masonry-layout'), { ssr: false });

const MasonryPage = () => {
  const gridRef = useRef(null);

  // List of image file names in the PaintingLarger directory
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

  // Initialize Masonry once the component is mounted
  useEffect(() => {
    if (gridRef.current && Masonry) {
      new Masonry(gridRef.current, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true,
        gutter: 10,
      });
    }
  }, []);

  return (
    <div>
      <div className="grid" ref={gridRef}>
        <div className="grid-sizer"></div>
        {images.map((src, index) => (
          <div key={index} className="grid-item">
            <img src={src} alt={`Painting ${index + 1}`} />
          </div>
        ))}
      </div>

      <style jsx>{`
        .grid {
          display: flex;
          flex-wrap: wrap;
          margin-left: -10px;
          margin-right: -10px;
        }
        .grid-item {
          width: 33.333%;
          margin-bottom: 10px;
          padding-left: 10px;
          padding-right: 10px;
        }
        .grid-sizer {
          width: 33.333%;
        }
        img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
};

export default MasonryPage;