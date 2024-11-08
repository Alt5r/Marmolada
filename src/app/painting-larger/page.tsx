// pages/index.tsx
'use client'

import MasonryPage from '../components/Masonrygallery';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#bcc5d1' }}>
      <Navbar />
      <MasonryPage />
    </div>
  );
}
