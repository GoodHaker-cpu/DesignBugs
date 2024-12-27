import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl font-bold">{'{db}'}</a>
          
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="hover:text-gray-300 transition">Services</a>
            <a href="#portfolio" className="hover:text-gray-300 transition">Portfolio</a>
            <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#services" className="block hover:text-gray-300 transition">Services</a>
            <a href="#portfolio" className="block hover:text-gray-300 transition">Portfolio</a>
            <a href="#contact" className="block hover:text-gray-300 transition">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
}