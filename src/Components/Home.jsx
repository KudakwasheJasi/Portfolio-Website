import React, { useState, useEffect } from 'react';

// Importing images
import webDevelopmentImage from '../assets/IMAGES/lab 1.jpg';
import softwareSolutionsImage from '../assets/IMAGES/Blog 9.jpg';
import portfolioProjectsImage from '../assets/IMAGES/Blog 8.jpg';
import graphicDesignImage from '../assets/IMAGES/itenaries3.png'; 
import digitalMarketingImage from '../assets/IMAGES/banner image.webp'; 
import uiuxDesignImage from '../assets/IMAGES/Blog 2.jpg';

// Sample data for mapping with images and dates
const infoData = [
  {
    title: 'Web Development',
    description: 'I specialize in building responsive and dynamic web applications using React, Tailwind CSS, and JavaScript.',
    imageUrl: webDevelopmentImage,
    date: 'March 2024',
  },
  {
    title: 'Software Solutions',
    description: 'Providing efficient software solutions to help businesses achieve their digital goals.',
    imageUrl: softwareSolutionsImage,
    date: 'June 2024',
  },
  {
    title: 'Portfolio Projects',
    description: 'Explore the variety of projects I’ve worked on, ranging from e-commerce websites to portfolio applications.',
    imageUrl: portfolioProjectsImage,
    date: 'September 2024',
  },
  {
    title: 'Graphic Design',
    description: 'Creating visually appealing designs for digital and print media, focusing on aesthetics and functionality.',
    imageUrl: graphicDesignImage,
    date: 'November 2024',
  },
  {
    title: 'Digital Marketing',
    description: 'Implementing strategies to enhance online presence and drive traffic, including SEO, PPC, and content marketing.',
    imageUrl: digitalMarketingImage,
    date: 'January 2025',
  },
  {
    title: 'UI/UX Design',
    description: 'Designing user interfaces and experiences that are intuitive and engaging, improving user satisfaction.',
    imageUrl: uiuxDesignImage,
    date: 'March 2025',
  }
];

const Home = () => {
  // State to handle typing effects for the intro section
  const [typedIntro, setTypedIntro] = useState('');
  const [typedSubIntro, setTypedSubIntro] = useState('');
  
  const introText = "Hi, I'm Kudakwashe Jasi, a passionate web developer focused on creating user-friendly and dynamic web solutions.";
  
  const subIntroText = "Here, you can explore my projects, services, and how I can help you build something great!";

  // Typing effect for intro section
  useEffect(() => {
    let introIndex = 0;
    let subIntroIndex = 0;

    const typeIntro = () => {
      if (introIndex < introText.length) {
        setTypedIntro(prev => prev + introText[introIndex]);
        introIndex++;
      }
    };

    const typeSubIntro = () => {
      if (subIntroIndex < subIntroText.length) {
        setTypedSubIntro(prev => prev + subIntroText[subIntroIndex]);
        subIntroIndex++;
      }
    };

    // Typing intervals for intro and subIntro text
    const introTypingInterval = setInterval(typeIntro, 50); 
    const subIntroTypingInterval = setTimeout(() => setInterval(typeSubIntro, 50), 3000); 

    // Clean up intervals
    return () => {
      clearInterval(introTypingInterval);
      clearTimeout(subIntroTypingInterval);
    };
  }, []);

  return (
    <div className="home-container p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to My Portfolio</h1>

      {/* Introduction Section with Typing Effect */}
      <div className="intro-section text-center mb-8">
        <p className="text-lg text-gray-700">{typedIntro}</p>
        <p className="text-lg text-gray-700 mt-4">{typedSubIntro}</p>
      </div>

      {/* Mapping over data */}
      <div className="info-section grid grid-cols-1 md:grid-cols-3 gap-8">
        {infoData.map((item, index) => (
          <div key={index} className="info-card p-6 bg-white shadow-lg rounded-lg flex flex-col items-center">
            <img src={item.imageUrl} alt={item.title} className="w-full h-32 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-700 mb-2">{item.description}</p>
            <p className="text-sm text-gray-500">{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;