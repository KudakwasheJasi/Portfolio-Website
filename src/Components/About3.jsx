import React from 'react';
import './About3.css';


// Data for About3 section with more information, links, and animations
const aboutData = [
  {
    id: 1,
    title: 'Web Development',
    description: 'We provide full-stack web development services using modern technologies like React, Node.js, and MongoDB.',
    link: 'https://yourwebsite.com/web-development',
    animationClass: 'animate-fade-in',
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description: 'Our design team creates visually stunning and user-friendly interfaces tailored to your business needs.',
    link: 'https://yourwebsite.com/ui-ux-design',
    animationClass: 'animate-slide-up',
  },
  {
    id: 3,
    title: 'Mobile App Development',
    description: 'We build responsive, fast, and scalable mobile apps using Flutter and React Native for cross-platform compatibility.',
    link: 'https://yourwebsite.com/mobile-app-development',
    animationClass: 'animate-fade-in',
  },
  {
    id: 4,
    title: 'Digital Marketing',
    description: 'Our digital marketing experts help you grow your online presence through SEO, social media, and content marketing.',
    link: 'https://yourwebsite.com/digital-marketing',
    animationClass: 'animate-slide-up',
  },
];

const About3 = () => {
  return (
    <div className="about3-container p-8 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-6">What We Do</h1>
      
      <div className="about-info grid grid-cols-1 md:grid-cols-2 gap-6">
        {aboutData.map((item) => (
          <div
            key={item.id}
            className={`about-item bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ${item.animationClass}`}
          >
            <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
            <p className="text-gray-700 mb-4">{item.description}</p>
            <a
              href={item.link}
              className="text-blue-500 hover:text-blue-700 transition-colors duration-200 underline"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About3;
