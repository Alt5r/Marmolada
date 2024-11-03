'use client'

import { useState } from 'react'
 
export default function Navbar() {
  
  return (
    
    <div className="navbar bg-backgroundNavbar">
        
      <div className="navbar-start">
      <div className="absolute top-0 left-0 mt-2 ml-2">
        <a className="btn btn-ghost text-xl">Nicola Bird</a>
      </div>
       
        
      </div>
      
      <div className="navbar-center hidden lg:flex w-full justify-center">
        <ul className="menu menu-horizontal px-3 ">
          <li><a>Home</a></li>
          <li><a>Painting - latest</a></li>
          <li><a>Painting - larger</a></li>
          <li><a>Painting - older</a></li>
          <li><a>Printmaking</a></li>
          <li><a>Bio</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
    </div>
  )
}
