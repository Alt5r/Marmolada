'use client'

import Navbar from './components/Navbar';
import Homepage from "./pages/Homepage";



export default function Home() {

  

  return (
    <div style={{ backgroundColor: '#bcc5d1', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
    <Navbar />
    <Homepage />
   
    </div>
  );
}
