import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { useSpring, animated } from '@react-spring/web';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Images
import profilePic from '../assets/IMAGES/Blog 9.jpg';
import codingImage from '../assets/IMAGES/About logo.jpg';

const About = () => {
  // Spring animation for the section
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });

  // Typing effect for the text
  const [typedText1, setTypedText1] = useState('');
  const [typedText2, setTypedText2] = useState('');
  const [typedText3, setTypedText3] = useState('');
  const text1 = "I'm a passionate web developer with a focus on creating dynamic and user-friendly web applications.";
  const text2 = "When I'm not coding, you'll find me running, exploring new technologies, or working on personal projects.";
  const text3 = "My goal is to continue growing as a developer and to create impactful, high-quality software that makes a difference.";

  useEffect(() => {
    let text1Index = 0;
    let text2Index = 0;
    let text3Index = 0;

    const typeText1 = () => {
      if (text1Index < text1.length) {
        setTypedText1(prev => prev + text1[text1Index]);
        text1Index++;
      }
    };

    const typeText2 = () => {
      if (text2Index < text2.length) {
        setTypedText2(prev => prev + text2[text2Index]);
        text2Index++;
      }
    };

    const typeText3 = () => {
      if (text3Index < text3.length) {
        setTypedText3(prev => prev + text3[text3Index]);
        text3Index++;
      }
    };

    // Timing intervals to simulate typing
    const typingInterval1 = setInterval(typeText1, 50); // Adjust speed as needed
    const typingInterval2 = setTimeout(() => setInterval(typeText2, 50), 3000); // Delay typing of next text
    const typingInterval3 = setTimeout(() => setInterval(typeText3, 50), 6000);

    return () => {
      clearInterval(typingInterval1);
      clearTimeout(typingInterval2);
      clearTimeout(typingInterval3);
    };
  }, []);

  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="about-container p-8">
      <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>

      {/* Animated section */}
      <animated.div style={fadeIn} className="max-w-4xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Profile Picture */}
          <div className="flex-1 mb-8 md:mb-0"> {/* Add margin-bottom for mobile view */}
            <img src={profilePic} alt="Profile" className="w-full h-96 object-cover rounded-lg shadow-md" />
          </div>

          {/* Information */}
          <div className="flex-1 mt-8 md:mt-0"> {/* Add top margin for mobile view */}
            <h2 className="text-2xl font-semibold mb-4">Hi, I'm Kudakwashe Jasi</h2>
            <p className="text-gray-700 mb-4">{typedText1}</p>
            <p className="text-gray-700 mb-4">{typedText2}</p>
            <p className="text-gray-700">{typedText3}</p>
          </div>
        </div>
      </animated.div>

      {/* Carousel */}
      <div className="carousel-container mt-8">
        <Slider {...settings}>
          <div>
            <img src={codingImage} alt="Coding" className="w-full h-20 object-cover rounded-lg shadow-md" />
          </div>
          {/* Add more slides as needed */}
        </Slider>
      </div>
    </div>
  );
};

export default About;
