'use client'

import Navbar from './components/Navbar';
import Homepage from "./pages/Homepage";
import Wip from './components/Wip';



export default function Home() {

  

  return (
    <div style={{ backgroundColor: '#bcc5d1', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
    <Navbar />
    <Homepage />
    <Wip />
   
    </div>
  );
}
