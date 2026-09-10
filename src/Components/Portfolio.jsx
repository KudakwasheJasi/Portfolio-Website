import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import project1 from '../assets/IMAGES/Eco4.png'; 
import project2 from '../assets/IMAGES/NYAMATUSI.png';
import project3 from '../assets/IMAGES/Travela-Tourism-Website-Template.png'; 
import project4 from '../assets/IMAGES/Flexbox-Project.png'; 
import project5 from '../assets/IMAGES/roots.png';
import project6 from '../assets/IMAGES/Continental.png'; 

const portfolioItems = [
  {
    id: 1,
    title: 'Eco Project',
    description: 'Sustainable eco-friendly initiative website',
    imageUrl: project1,
    details: 'A comprehensive platform for sustainable practices with real-time carbon footprint tracking.',
    year: '2023',
    technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    link: '#',
    github: '#'
  },
  {
    id: 2,
    title: 'Nyamatusi Tourism',
    description: 'Tourism destination showcase platform',
    imageUrl: project2,
    details: 'Interactive tourism website with booking system, virtual tours, and travel guides.',
    year: '2023',
    technologies: ['React', 'Firebase', 'Stripe', 'Google Maps API'],
    link: '#',
    github: '#'
  },
  {
    id: 3,
    title: 'Travela Tourism',
    description: 'Complete tourism website template',
    imageUrl: project3,
    details: 'Full-featured travel booking platform with user reviews, ratings, and itinerary planner.',
    year: '2024',
    technologies: ['Vue.js', 'Express', 'PostgreSQL', 'AWS'],
    link: '#',
    github: '#'
  },
  {
    id: 4,
    title: 'Flexbox Layouts',
    description: 'Responsive layout system project',
    imageUrl: project4,
    details: 'Advanced CSS Flexbox and Grid demonstrations with responsive design patterns.',
    year: '2023',
    technologies: ['HTML', 'CSS3', 'Flexbox', 'Grid'],
    link: '#',
    github: '#'
  },
  {
    id: 5,
    title: 'Roots Agriculture',
    description: 'Sustainable agriculture platform',
    imageUrl: project5,
    details: 'IoT-enabled agriculture platform for monitoring and optimizing root vegetable cultivation.',
    year: '2024',
    technologies: ['React', 'IoT', 'Python', 'Machine Learning'],
    link: '#',
    github: '#'
  },
  {
    id: 6,
    title: 'Continental Cuisine',
    description: 'Recipe and cooking guide website',
    imageUrl: project6,
    details: 'Interactive recipe platform with video tutorials, nutritional info, and community ratings.',
    year: '2023',
    technologies: ['Next.js', 'MongoDB', 'Stripe', 'Cloudinary'],
    link: '#',
    github: '#'
  }
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const categories = ['all', '2023', '2024'];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.year === selectedCategory);

  return (
    <div id="portfolio" className="bg-gray-900 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Selected <span className="text-blue-400">Work</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcase of projects built with modern technologies and best practices.
          </p>
          <div className="h-1 w-20 bg-blue-400 mx-auto mt-6"></div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex justify-center gap-4 mb-12 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredItems.map(item => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 hover:border-blue-400 transition-all duration-300 group"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex gap-4">
                    <motion.a
                      href={item.link}
                      className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                    <motion.a
                      href={item.github}
                      className="bg-gray-900 hover:bg-gray-800 text-white p-3 rounded-full border border-gray-700"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaGithub />
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                <p className="text-gray-500 text-xs mb-4">{item.details}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.technologies.map((tech, idx) => (
                    <span key={idx} className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                  <span className="text-gray-500 text-sm">{item.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
