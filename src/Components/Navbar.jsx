import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaInstagram, FaEnvelope, FaMapPin, FaWhatsapp, FaFacebook, FaChevronDown } from 'react-icons/fa'; // Import FaChevronDown
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported
import logo from '../assets/IMAGES/Logo.webp';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false); // State for Home dropdown
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false); // State for About dropdown
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false); // State for Services dropdown
  const [isPortfolioDropdownOpen, setIsPortfolioDropdownOpen] = useState(false); // State for Portfolio dropdown
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false); // State for Blog dropdown

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle link click and close the menu
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsHomeDropdownOpen(false); // Close Home dropdown on link click
    setIsAboutDropdownOpen(false); // Close About dropdown on link click
    setIsServicesDropdownOpen(false); // Close About dropdown on link click
    setIsPortfolioDropdownOpen(false); // Close Portfolio dropdown on link click
    setIsBlogDropdownOpen(false); // Close Portfolio dropdown on link click
  };

  // Function to toggle Home dropdown
  const toggleHomeDropdown = () => {
    setIsHomeDropdownOpen(!isHomeDropdownOpen);
  };

  // Function to toggle About dropdown
  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };
    // Function to toggle About dropdown
    const toggleServicesDropdown = () => {
      setIsServicesDropdownOpen(!isServicesDropdownOpen);
    };
     // Function to toggle Portfolio dropdown
     const togglePortfolioDropdown = () => {
      setIsPortfolioDropdownOpen(!isPortfolioDropdownOpen);
     };
       // Function to toggle Portfolio dropdown
       const toggleBlogDropdown = () => {
        setIsBlogDropdownOpen(!isBlogDropdownOpen);
     };

  return (
    <nav className="navbar bg-gray-800 text-white p-4 flex flex-col md:flex-row justify-between items-center space-x-4">
      <div className="logo">
        <h1 className="text-2xl font-bold">
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Logo" 
              className="w-8 h-auto" // Adjust the width and height as needed
            />
          </Link>
        </h1>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white text-2xl">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? 'block' : 'hidden'} md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6`}>
        <li>
          <div className="relative">
            <button onClick={toggleHomeDropdown} className="flex items-center text-white no-underline hover:text-blue-400">
              Home
              {/* <FaChevronDown className={` transition-transform ${isHomeDropdownOpen ? 'rotate-180' : 'rotate-0'}`} /> */}
            </button>
            {/* Home Dropdown Menu */}
            {isHomeDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg z-10">
                <li>
                  <Link to="/home1" className="block px-4 py-2 text-white hover:bg-gray-600 no-underline" onClick={handleLinkClick}>Home 1</Link>
                </li>
                <li>
                  <Link to="/home2" className="block px-4 py-2 text-white hover:bg-gray-600 no-underline" onClick={handleLinkClick}>Home 2</Link>
                </li>
                <li>
                  <Link to="/home3" className="block px-4 py-2 text-white hover:bg-gray-600 no-underline" onClick={handleLinkClick}>Home 3</Link>
                </li>
              </ul>
            )}
          </div>
        </li>
        <li>
          <div className="relative">
            <button onClick={toggleAboutDropdown} className="flex items-center text-white no-underline hover:text-blue-400">
              About 
              {/* <FaChevronDown className={`ml-1 transition-transform ${isAboutDropdownOpen ? 'rotate-180' : 'rotate-0'}`} /> */}
            </button>
            {/* About Dropdown Menu */}
            {isAboutDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg z-10">
                <li>
                  <Link to="/about1" className="block px-4 py-2 text-white hover:bg-gray-600 no-underline" onClick={handleLinkClick}>About 1</Link>
                </li>
                <li>
                  <Link to="/about2" className="block px-4 py-2 text-white hover:bg-gray-600 no-underline" onClick={handleLinkClick}>About 2</Link>
                </li>
                <li>
                  <Link to="/about3" className="block px-4 py-2 text-white hover:bg-gray-600 no-underline" onClick={handleLinkClick}>About 3</Link>
                </li>
              </ul>
            )}
          </div>
        </li>
        <div className="relative">
            <button onClick={toggleServicesDropdown} className="flex items-center text-white no-underline hover:text-blue-400">
              Services
              {/* <FaChevronDown className={`ml-1 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : 'rotate-0'}`} /> */}
            </button>
            {/* About Dropdown Menu */}
            {isServicesDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg z-10">
                <li>
                  <Link to="/services1" className="block px-4 py-2 text-white hover:bg-gray-600 no-underline" onClick={handleLinkClick}>Services 1</Link>
                </li>
                <li>
                  <Link to="/services2" className="block px-4 py-2 text-white hover:bg-gray-600 no-underline" onClick={handleLinkClick}>services 2</Link>
                </li>
                <li>
                  <Link to="/services3" className="block px-4 py-2 text-white hover:bg-gray-600 no-underline" onClick={handleLinkClick}>services 3</Link>
                </li>
              </ul>
            )}
          </div>
          <div className="relative">
            <button onClick={togglePortfolioDropdown} className="flex items-center text-white no-underline hover:text-blue-400">
              Portfolio
              {/* <FaChevronDown className={`ml-1 transition-transform ${isPortfolioDropdownOpen ? 'rotate-180' : 'rotate-0'}`} /> */}
            </button>
            {/* Portfolio Dropdown Menu */}
            {isPortfolioDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg z-10 no-underline">
                <li>
                  <Link to="/portfolio1" className="block px-4 py-2 text-white hover:bg-gray-600 no-underline" onClick={handleLinkClick}>portfolio 1</Link>
                </li>
                <li>
                  <Link to="/portfolio2" className="block px-4 py-2 text-white hover:bg-gray-600 no-underline" onClick={handleLinkClick}>portfolio 2</Link>
                </li>
                <li>
                  <Link to="/portfolio3" className="block px-4 py-2 text-white hover:bg-gray-600 no-underline" onClick={handleLinkClick}>portfolio 3</Link>
                </li>
              </ul>
            )}
          </div>
          <div className="relative">
            <button onClick={toggleBlogDropdown} className="flex items-center text-white no-underline hover:text-blue-400">
              Blog
              {/* <FaChevronDown className={`ml-1 transition-transform ${isBlogDropdownOpen ? 'rotate-180' : 'rotate-0'}`} /> */}
            </button>
            {/* Blog Dropdown Menu */}
            {isBlogDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg z-10">
                <li>
                  <Link to="/blog1" className="block px-4 py-2 text-white hover:bg-gray-600 no-underline" onClick={handleLinkClick}>Blog 1</Link>
                </li>
                <li>
                  <Link to="/blog2" className="block px-4 py-2 text-white hover:bg-gray-600 no-underline" onClick={handleLinkClick}>Blog 2</Link>
                </li>
                <li>
                  <Link to="/blog3" className="block px-4 py-2 text-white hover:bg-gray-600 no-underline" onClick={handleLinkClick}>blog 3</Link>
                </li>
              </ul>
            )}
          </div>
        <li>
          <Link to="/contact" className="text-white no-underline hover:text-blue-400" onClick={handleLinkClick}>Contact</Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="social-icons flex space-x-4">
        <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="w-6 h-6 text-white" />
        </a>
        <a href="mailto:your-email@example.com">
          <FaEnvelope className="w-6 h-6 text-white" />
        </a>
        <a href="https://www.google.com/maps?q=your-location" target="_blank" rel="noopener noreferrer">
          <FaMapPin className="w-6 h-6 text-white" />
        </a>
        <a href="https://wa.me/263714141360" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="w-6 h-6 text-white" />
        </a>
        <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="w-6 h-6 text-white" />
        </a>
      </div>

      {/* Styles for Waving Effect */}
      <style jsx>{`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(10deg); }
          100% { transform: rotate(0deg); }
        }
        
        .animate-waving {
          animation: wave 1s infinite;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
