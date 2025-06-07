'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from '@/components/Logo';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-primary font-medium">Home</Link>
            <Link href="/blog" className="text-gray-700 hover:text-primary transition-colors">Blogs</Link>
            <Link href="/projects" className="text-gray-700 hover:text-primary transition-colors">Projects</Link>
            <Link href="/about" className="text-gray-700 hover:text-primary transition-colors">About</Link>
            <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
              Subscribe
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700"
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link href="/" className="block px-3 py-2 text-primary font-medium">Home</Link>
            <Link href="/blog" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Blogs</Link>
            <Link href="/projects" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Projects</Link>
            <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">About</Link>
            <button className="w-full mt-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      )}
    </nav>
  );
} 