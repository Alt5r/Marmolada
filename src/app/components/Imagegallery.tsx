// components/ImageGallery.tsx

'use client'
import Image from "next/image";

const ImageGallery = () => {
  // Adjust the image paths based on your actual images in the public/gallery directory
  const images = [
    "/gallery/1.jpeg",
    "/gallery/2.jpeg",
    "/gallery/3.jpeg",
    "/gallery/4.jpeg",
    "/gallery/5.jpeg",
    "/gallery/6.jpeg",
    "/gallery/7.jpeg",
    "/gallery/8.jpeg",
    "/gallery/9.jpeg",
    "/gallery/10.jpeg",
    "/gallery/11.jpeg",
    "/gallery/12.jpeg",
    "/gallery/13.jpeg",
    "/gallery/14.jpeg",
    "/gallery/15.jpeg",
    "/gallery/16.jpeg",
    "/gallery/17.jpeg",
    "/gallery/18.jpeg",
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {images.map((src, index) => (
        <div key={index} className="w-1/3 h-48 relative">
          <Image 
            src={src} 
            alt={`Gallery Image ${index + 1}`} 
            layout="fill" // This makes the image fill its parent container
            objectFit="cover" // This ensures the image covers the entire area
            className="rounded-lg shadow-lg" // Optional: styling for rounded corners and shadow
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
