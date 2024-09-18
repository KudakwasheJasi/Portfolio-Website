import React from 'react';
import About from '../Components/About';
import Blog from '../Components/Blog';
import Portfolio from '../Components/Portfolio';
import Services from '../Components/Services';
import Home from '../Components/Home'; // Include Navbar if needed
import Contact from '../Components/Contact';

const LandingPage = () => {
  return (
    <>
 {/* Add Navbar if you want it at the top of the page */}
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Blog />
      <Contact/>
    </>
  );
};

export default LandingPage;
