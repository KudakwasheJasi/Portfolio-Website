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
              <span className="ml-2 text-xl font-bold hidden sm:inline">Kudakwashe</span>
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
            <li><a href="#portfolio" className="text-white no-underline hover:text-blue-400 transition-colors">Portfolio</a></li>
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
            <li><a href="#portfolio" className="text-white no-underline hover:text-blue-400 block py-2" onClick={handleLinkClick}>Portfolio</a></li>
            <li><a href="#blog" className="text-white no-underline hover:text-blue-400 block py-2" onClick={handleLinkClick}>Blog</a></li>
            <li><a href="#contact" className="text-white no-underline hover:text-blue-400 block py-2" onClick={handleLinkClick}>Contact</a></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
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
