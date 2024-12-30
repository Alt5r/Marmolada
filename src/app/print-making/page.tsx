// pages/index.tsx
'use client'

import Carusel from "../components/Carusel";
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#bcc5d1' }}>
      <Navbar />
      <div className="flex justify-center min-h-screen p-3" style={{ backgroundColor: '#bcc5d1' }}>
      <div className="w-3/4 max-w-2xl max-h-[70vh]" style={{ backgroundColor: '#bcc5d1' }}>
        <Carusel />
        
      </div>
    </div>
      
      
    </div>
  );
}
