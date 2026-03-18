'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from '@/components/Logo';
import SearchInput from './SearchInput';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="
      bg-white/80 dark:bg-gray-900/80
      backdrop-blur-md
      shadow-sm dark:shadow-gray-900/50
      border-b border-transparent dark:border-gray-800
      fixed w-full z-50
      transition-colors duration-300
    ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">

          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-6">
            <SearchInput />
            <Link
              href="/"
              className="text-primary dark:text-purple-400 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-purple-400 transition-colors"
            >
              Blogs
            </Link>
            <Link
              href="/projects"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-purple-400 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-purple-400 transition-colors"
            >
              About
            </Link>
            <button className="
              bg-purple-600 dark:bg-purple-600
              text-white
              px-4 py-2 rounded-lg
              hover:bg-purple-700 dark:hover:bg-purple-500
              transition-colors duration-200
            ">
              Subscribe
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-purple-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="
            px-2 pt-2 pb-3 space-y-1 sm:px-3
            bg-white dark:bg-gray-900
            shadow-lg dark:shadow-gray-900/60
            border-t border-gray-100 dark:border-gray-800
          ">
            <Link
              href="/"
              className="block px-3 py-2 text-primary dark:text-purple-400 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-purple-400 transition-colors"
            >
              Blogs
            </Link>
            <Link
              href="/projects"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-purple-400 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-purple-400 transition-colors"
            >
              About
            </Link>
            <button className="
              w-full mt-2
              bg-primary dark:bg-purple-600
              text-white
              px-4 py-2 rounded-lg
              hover:bg-purple-700 dark:hover:bg-purple-500
              transition-colors duration-200
            ">
              Subscribe
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}