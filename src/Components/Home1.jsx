import React from 'react';
import projectImage1 from '../assets/IMAGES/home 5.jpg';
import projectImage2 from '../assets/IMAGES/home 4.jpg';
import projectImage3 from '../assets/IMAGES/Home 2.jpg';
import projectImage4 from '../assets/IMAGES/Home 1.jpg';
import projectImage5 from '../assets/IMAGES/home 3.jpg';
import projectImage6 from '../assets/IMAGES/home 6.jpg';

const projects = [
  {
    id: 1,
    image: projectImage1,
    title: 'Project A',
    description: 'A brief description of Project A goes here.',
    date: 'January 15, 2024',
  },
  {
    id: 2,
    image: projectImage2,
    title: 'Project B',
    description: 'A brief description of Project B goes here.',
    date: 'February 20, 2024',
  },
  {
    id: 3,
    image: projectImage3,
    title: 'Project C',
    description: 'A brief description of Project C goes here.',
    date: 'March 5, 2024',
  },
  {
    id: 4,
    image: projectImage4,
    title: 'Project D',
    description: 'A brief description of Project D goes here.',
    date: 'April 10, 2024',
  },
  {
    id: 5,
    image: projectImage5,
    title: 'Project E',
    description: 'A brief description of Project E goes here.',
    date: 'May 25, 2024',
  },
  {
    id: 6,
    image: projectImage6,
    title: 'Project F',
    description: 'A brief description of Project F goes here.',
    date: 'June 30, 2024',
  },
];

const Home1 = () => {
  return (
    <div className="p-8">
      {/* Centered "Explore Our Work" Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-2">Explore Our Work</h2>
        <p className="mb-4">Take a look at some of the projects we have completed:</p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <h3 className="font-bold text-xl">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <p className="text-sm text-gray-500 mt-1">Completed on: {project.date}</p>
          </div>
        ))}
      </div>

      {/* Centered "Get in Touch" Section */}
      <div className="text-center mt-12">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p>If you have any questions or would like to discuss your project, feel free to contact us!</p>
      </div>
    </div>
  );
};

export default Home1;
