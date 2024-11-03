'use client'
import Image from "next/image";
import Navbar from './components/Navbar';
import Homepage from "./pages/Homepage";

import { useState } from 'react';

export default function Home() {

  

  return (
    <div style={{ backgroundColor: '#bcc5d1' }}>
    <Navbar />
    <Homepage />
   
    </div>
  );
}
