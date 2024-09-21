import React from 'react';
import port1 from '../assets/IMAGES/Nowalls.png';
import port2 from '../assets/IMAGES/edumint.jpg';
import port3 from '../assets/IMAGES/Portfolio.png';

const Portfolio2 = () => {
  // Data array for portfolio projects with links
  const portfolioData = [
    {
      img: port1,
      title: 'NoWalls Project',
      description: 'A platform that connects volunteers with non-profits. Click to view the project.',
      url: 'https://example.com/nowalls', // Replace with actual project URL
    },
    {
      img: port2,
      title: 'Edumint',
      description: 'An education management system for schools. Click to explore the project.',
      url: 'https://example.com/edumint', // Replace with actual project URL
    },
    {
      img: port3,
      title: 'My Projects',
      description: 'A collection of my web development projects. Click to learn more.',
      url: 'https://example.com/myprojects', // Replace with actual project URL
    },
  ];

  return (
    <div className="portfolio-container p-8 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-6">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.map((project, index) => (
          <div key={index} className="project-item bg-white border rounded-lg shadow-lg overflow-hidden cursor-pointer" onClick={() => window.open(project.url, '_blank')}>
            <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a href="https://github.com/kudakwasheJasi" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Visit my GitHub: kudakwasheJasi
        </a>
      </div>
    </div>
  );
};

export default Portfolio2;
