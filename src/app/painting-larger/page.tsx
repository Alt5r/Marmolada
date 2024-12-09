'use client';

import MasonryPage from '../components/Masonrygallery';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#bcc5d1' }}>
      <Navbar />
      <div className="flex justify-center">
        <div className="w-11/12 max-w-10xl">
          <MasonryPage />
        </div>
      </div>
    </div>
  );
}
