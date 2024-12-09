'use client'


import Link from 'next/link';
 
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
          <li><Link href="/">Home</Link></li>
          <li><a></a></li>
          <li><Link href="/Gallery">Painting - latest</Link></li> {/* Button to Gallery */}
          <li><Link href="/painting-larger">Painting - larger</Link></li>
          <li><Link href="/painting-older">Painting - older</Link></li>
          
          <li><Link href="/print-making">Printmaking</Link></li>
          <li><Link href="/bio">Bio</Link></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
    </div>
  )
}
