// pages/index.tsx
'use client'

import MasonryPage2 from '../components/Masonrygallery-older';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#bcc5d1' }}>
      <Navbar />
      <MasonryPage2 />
    </div>
  );
}
