import React from 'react';
import About from '../Components/About';
import Blog from '../Components/Blog';
import Portfolio from '../Components/Portfolio';
import Services from '../Components/Services';
import Home from '../Components/Home';
import Contact from '../Components/Contact';

const LandingPage = () => {
  return (
    <div className="w-full">
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Blog />
      <Contact />
    </div>
  );
};

export default LandingPage;
