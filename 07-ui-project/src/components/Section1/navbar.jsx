import React, { useState } from "react";



function Navbar() {
  return (
    <nav className="w-full px-6 py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-xl font-bold tracking-tight">
          FINORA
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#home" className="hover:text-gray-500 transition">
            Home
          </a>

          <a href="#about" className="hover:text-gray-500 transition">
            About
          </a>

          <a href="#services" className="hover:text-gray-500 transition">
            Services
          </a>

          <a href="#contact" className="hover:text-gray-500 transition">
            Contact
          </a>
        </div>

        {/* Button */}
        <button className="bg-black text-white px-5 py-2.5 rounded-full text-sm hover:bg-gray-800 transition">
          Get Started
        </button>

      </div>
    </nav>
  );
}

export default Navbar;