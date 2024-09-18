/* eslint-disable react/no-unknown-property */
import React from 'react';

// Import images
import project1 from '../assets/IMAGES/Eco4.png'; 
import project2 from '../assets/IMAGES/NYAMATUSI.png';
import project3 from '../assets/IMAGES/Travela-Tourism-Website-Template.png'; 
import project4 from '../assets/IMAGES/Flexbox-Project.png'; 
import project5 from '../assets/IMAGES/roots.png';
import project6 from '../assets/IMAGES/Continental.png'; 

// Sample data for portfolio items
const portfolioItems = [
  {
    id: 1,
    title: 'Eco Project',
    description: 'A sustainable eco-friendly initiative.',
    imageUrl: project1,
    details: 'This project focuses on sustainable practices and eco-friendly solutions to reduce carbon footprints.',
    year: '2023',
  },
  {
    id: 2,
    title: 'Nyamatusi',
    description: 'A beautiful place to visit in Zimbabwe.',
    imageUrl: project2,
    details: 'This project showcases the natural beauty and tourism potential of Nyamatusi in Zimbabwe.',
    year: '2023',
  },
  {
    id: 3,
    title: 'Travela Tourism Website',
    description: 'A complete tourism website template.',
    imageUrl: project3,
    details: 'This template provides a comprehensive solution for tourism-related businesses, including booking features.',
    year: '2024',
  },
  {
    id: 4,
    title: 'Flexbox Project',
    description: 'A responsive layout using Flexbox.',
    imageUrl: project4,
    details: 'This project demonstrates the use of Flexbox to create responsive web layouts efficiently.',
    year: '2023',
  },
  {
    id: 5,
    title: 'Roots',
    description: 'An innovative roots-based project.',
    imageUrl: project5,
    details: 'This initiative explores the potential of root vegetables in sustainable agriculture.',
    year: '2024',
  },
  {
    id: 6,
    title: 'Continental',
    description: 'A continental cuisine website.',
    imageUrl: project6,
    details: 'This website features recipes and culinary tips for various continental dishes.',
    year: '2023',
  }
];

const Portfolio = () => {
  return (
    <div className="portfolio-container p-8">
      <h1 className="text-4xl font-bold text-center mb-8">My Portfolio</h1>
      <div className="portfolio-items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map(item => (
          <div key={item.id} className="portfolio-item border rounded-lg overflow-hidden shadow-lg">
            <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-700">{item.description}</p>
              <p className="mt-2 text-gray-500">{item.details}</p>
              <p className="mt-2 text-gray-800"><strong>Year:</strong> {item.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
