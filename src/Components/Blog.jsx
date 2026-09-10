import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaClock, FaArrowRight } from 'react-icons/fa';
import blod from '../assets/IMAGES/Blog 1.jpg';
import blod1 from '../assets/IMAGES/Blog 4.jpg';
import blod2 from '../assets/IMAGES/Blog 6.jpg';
import blod3 from '../assets/IMAGES/Blog 2.jpg';
import blod4 from '../assets/IMAGES/Blog 5.jpg';
import blod5 from '../assets/IMAGES/Blog 8.jpg';

const blogs = [
  {
    id: 1,
    title: 'Exploring the Future of Web Development',
    description: 'A deep dive into modern web technologies including WebAssembly, Edge Computing, and AI-powered development tools.',
    imageUrl: blod,
    date: 'January 10, 2024',
    readTime: '5 min',
    category: 'Advanced',
    author: 'Kudakwashe Jasi'
  },
  {
    id: 2,
    title: 'UI/UX Design Best Practices for 2024',
    description: 'Advanced techniques for creating responsive, accessible designs with animations and micro-interactions.',
    imageUrl: blod1,
    date: 'February 5, 2024',
    readTime: '7 min',
    category: 'Design',
    author: 'Kudakwashe Jasi'
  },
  {
    id: 3,
    title: 'Performance Optimization: Core Web Vitals',
    description: 'Master the technical SEO aspects of Core Web Vitals and implement advanced performance strategies.',
    imageUrl: blod2,
    date: 'March 12, 2024',
    readTime: '8 min',
    category: 'Performance',
    author: 'Kudakwashe Jasi'
  },
  {
    id: 4,
    title: 'Advanced SEO: Schema Markup & Structured Data',
    description: 'Using structured data, JSON-LD, and advanced SEO techniques to improve search engine visibility.',
    imageUrl: blod3,
    date: 'April 22, 2024',
    readTime: '6 min',
    category: 'SEO',
    author: 'Kudakwashe Jasi'
  },
  {
    id: 5,
    title: 'Building Scalable Apps with React & Cloud',
    description: 'Advanced patterns for building scalable applications using React, Node.js, and cloud infrastructure.',
    imageUrl: blod4,
    date: 'May 15, 2024',
    readTime: '9 min',
    category: 'Advanced',
    author: 'Kudakwashe Jasi'
  },
  {
    id: 6,
    title: 'E-commerce Architecture: Microservices Approach',
    description: 'Building modern e-commerce platforms using microservices, APIs, and cloud-native technologies.',
    imageUrl: blod5,
    date: 'June 7, 2024',
    readTime: '10 min',
    category: 'Architecture',
    author: 'Kudakwashe Jasi'
  }
];

const Blog = () => {
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

  return (
    <div id="blog" className="bg-gray-800 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
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
            Latest <span className="text-blue-400">Articles</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            In-depth articles on web development, design, and advanced technologies.
          </p>
          <div className="h-1 w-20 bg-blue-400 mx-auto mt-6"></div>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {blogs.map((blog) => (
            <motion.article
              key={blog.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-700 hover:border-blue-400 transition-all duration-300 flex flex-col group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={blog.imageUrl} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <FaCalendar className="w-3 h-3" />
                    {blog.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <FaClock className="w-3 h-3" />
                    {blog.readTime}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                  {blog.description}
                </p>

                {/* Author & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <span className="text-xs text-gray-500">{blog.author}</span>
                  <motion.a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 flex items-center gap-2 text-sm font-semibold"
                    whileHover={{ x: 5 }}
                  >
                    Read More <FaArrowRight className="w-3 h-3" />
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
