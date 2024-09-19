/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';// Adjust the path as necessary
import Home from './Components/Home';
import Home1 from './Components/Home1'
import About from './Components/About';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import LandingPage from './page/LandingPage';
import Home2 from './Components/Home2';
import Home3 from './Components/Home3';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home1" element={<Home1 />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/home3" element={<Home3 />} />
      </Routes>
    </Router>
  );
};

export default App;
