// pages/index.tsx
'use client'

import ImageGallery from '../components/Imagegallery';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#bcc5d1' }}>
      <Navbar />
      <h1 className="text-center text-2xl font-bold my-6">Image Gallery</h1>
      
      <ImageGallery />
    </div>
  );
}
