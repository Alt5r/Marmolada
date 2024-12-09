// pages/index.tsx
'use client'

import MasonryPage2 from '../components/Masonrygallery-older';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#bcc5d1' }}>
      <Navbar />
      <div className="flex justify-center">
        <div className="w-11/12 max-w-10xl">
          <MasonryPage2 />
        </div>
      </div>
    </div>
  );
}

