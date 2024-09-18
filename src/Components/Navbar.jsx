import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaInstagram, FaEnvelope, FaMapPin, FaWhatsapp, FaFacebook } from 'react-icons/fa'; // Import FaFacebook
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle link click and close the menu
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar bg-gray-800 text-white p-4 flex flex-col md:flex-row justify-between items-center">
      <div className="logo">
        <h1 className="text-2xl font-bold">
          <Link to="/">
            Kuda<span className="no-underline text-blue-400">Jasi</span>
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
          <Link to="/home" className="text-white no-underline hover:text-blue-400" onClick={handleLinkClick}>Home</Link>
        </li>
        <li>
          <Link to="/about" className=" text-white no-underline hover:text-blue-400" onClick={handleLinkClick}>About</Link>
        </li>
        <li>
          <Link to="/services" className="text-white no-underline hover:text-blue-400" onClick={handleLinkClick}>Services</Link>
        </li>
        <li>
          <Link to="/portfolio" className="text-white no-underline hover:text-blue-400" onClick={handleLinkClick}>Portfolio</Link>
        </li>
        <li>
          <Link to="/blog" className="text-white no-underline hover:text-blue-400" onClick={handleLinkClick}>Blog</Link>
        </li>
        <li>
          <Link to="/contact" className="text-white no-underline hover:text-blue-400" onClick={handleLinkClick}>Contact</Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="social-icons flex space-x-4 mt-4 md:mt-0">
        <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="w-6 h-6 text-white" />
        </a>
        <a href="mailto:your-email@example.com">
          <FaEnvelope className="w-6 h-6 text-white" />
        </a>
        <a href="https://www.google.com/maps?q=your-location" target="_blank" rel="noopener noreferrer">
          <FaMapPin className="w-6 h-6 text-white" />
        </a>
        <a href="https://wa.me/263714141360" target="_blank" rel="noopener noreferrer"> {/* WhatsApp link */}
          <FaWhatsapp className="w-6 h-6 text-white" />
        </a>
        <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer"> {/* Facebook link */}
          <FaFacebook className="w-6 h-6 text-white" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
