'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar bg-backgroundNavbar px-4 overflow-hidden">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            className="btn btn-square btn-ghost"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div className="mt-2 ml-2">
        <a className="btn btn-ghost text-xl whitespace-nowrap">Nicola Bird</a>
        </div>
        
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex justify-center w-full">
        <ul className="menu menu-horizontal px-3 space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/Gallery">Painting - latest</Link>
          </li>
          <li>
            <Link href="/painting-larger">Painting - larger</Link>
          </li>
          <li>
            <Link href="/painting-older">Painting - older</Link>
          </li>
          <li>
            <Link href="/print-making">Printmaking</Link>
          </li>
          <li>
            <Link href="/bio">Bio</Link>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="navbar-end lg:hidden w-full">
          <ul className="menu menu-vertical bg-backgroundNavbar p-2 w-full space-y-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/Gallery">Painting - latest</Link>
            </li>
            <li>
              <Link href="/painting-larger">Painting - larger</Link>
            </li>
            <li>
              <Link href="/painting-older">Painting - older</Link>
            </li>
            <li>
              <Link href="/print-making">Printmaking</Link>
            </li>
            <li>
              <Link href="/bio">Bio</Link>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
