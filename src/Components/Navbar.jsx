import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';
import logo from '../assets/IMAGES/Logo.webp';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Track scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-gray-800'
    } text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="Logo" 
                className="w-8 h-8" 
              />
              <span className="ml-2 text-xl font-bold hidden sm:inline">Code Studio</span>
            </Link>
          </div>

          {/* Hamburger Icon - Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Navigation Links - Desktop */}
          <ul className={`hidden md:flex flex-row space-x-8 items-center`}>
            <li><Link to="/" className="text-white no-underline hover:text-blue-400 transition-colors" onClick={handleLinkClick}>Home</Link></li>
            <li><a href="#about" className="text-white no-underline hover:text-blue-400 transition-colors">About</a></li>
            <li><a href="#skills" className="text-white no-underline hover:text-blue-400 transition-colors">Skills</a></li>
            <li><a href="#services" className="text-white no-underline hover:text-blue-400 transition-colors">Services</a></li>
            <li><a href="#portfolio" className="text-white no-underline hover:text-blue-400 transition-colors">Work</a></li>
            <li><a href="#blog" className="text-white no-underline hover:text-blue-400 transition-colors">Blog</a></li>
            <li><a href="#contact" className="text-white no-underline hover:text-blue-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden bg-gray-700 flex flex-col space-y-4 py-4 px-4">
            <li><Link to="/" className="text-white no-underline hover:text-blue-400 block py-2" onClick={handleLinkClick}>Home</Link></li>
            <li><a href="#about" className="text-white no-underline hover:text-blue-400 block py-2" onClick={handleLinkClick}>About</a></li>
            <li><a href="#skills" className="text-white no-underline hover:text-blue-400 block py-2" onClick={handleLinkClick}>Skills</a></li>
            <li><a href="#services" className="text-white no-underline hover:text-blue-400 block py-2" onClick={handleLinkClick}>Services</a></li>
            <li><a href="#portfolio" className="text-white no-underline hover:text-blue-400 block py-2" onClick={handleLinkClick}>Work</a></li>
            <li><a href="#blog" className="text-white no-underline hover:text-blue-400 block py-2" onClick={handleLinkClick}>Blog</a></li>
            <li><a href="#contact" className="text-white no-underline hover:text-blue-400 block py-2" onClick={handleLinkClick}>Contact</a></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
