'use client'
import Image from "next/image";

const ImageGallery = () => {
  const images = [
    "/galleryI/1.jpeg", "/galleryI/2.jpeg", "/galleryI/3.jpeg",
    "/galleryI/4.jpeg", "/galleryI/5.jpeg", "/galleryI/6.jpeg",
    "/galleryI/7.jpeg", "/galleryI/8.jpeg", "/galleryI/9.jpeg",
    "/galleryI/10.jpeg", "/galleryI/11.jpeg", "/galleryI/12.jpeg",
    "/galleryI/13.jpeg", "/galleryI/14.jpeg", "/galleryI/15.jpeg",
    "/galleryI/16.jpeg", "/galleryI/17.jpeg", "/galleryI/18.jpeg",
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-lg mx-auto p-4">
      {images.map((src, index) => (
        <div key={index} className="relative">
          <Image 
            src={src} 
            alt={`Gallery Image ${index + 1}`}
            width={300}  // Adjust to fit your desired dimensions
            height={200} // Adjust to fit your desired dimensions
            className="rounded-lg shadow-lg transform transition-transform duration-700 ease-in-out hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
