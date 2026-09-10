import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pic1 from '../assets/IMAGES/lab 1.jpg';
import pic2 from '../assets/IMAGES/lab 3.jpg';
import pic3 from '../assets/IMAGES/lab 6.jpg';
import pic4 from '../assets/IMAGES/blog 10.jpg';
import pic5 from '../assets/IMAGES/blog 11.jpg';
import pic6 from '../assets/IMAGES/blog 12.jpg';

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Full-stack development with React, Node.js, and modern frameworks. Expert in responsive design and performance optimization.',
    imageUrl: pic1,
    advanced: ['React/Vue', 'Node.js/Express', 'RESTful APIs', 'Responsive Design']
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description: 'Creating intuitive interfaces with focus on user experience. Advanced prototyping and usability testing.',
    imageUrl: pic2,
    advanced: ['Figma Design', 'Wireframing', 'User Research', 'A/B Testing']
  },
  {
    id: 3,
    title: 'Mobile Development',
    description: 'Cross-platform mobile apps with React Native. Optimized for performance and user engagement.',
    imageUrl: pic3,
    advanced: ['React Native', 'Firebase', 'Mobile Optimization', 'App Publishing']
  },
  {
    id: 4,
    title: 'Advanced Analytics',
    description: 'Implement tracking, conversion optimization, and data-driven insights using advanced analytics tools.',
    imageUrl: pic4,
    advanced: ['Google Analytics', 'Mixpanel', 'Conversion Tracking', 'Data Dashboards']
  },
  {
    id: 5,
    title: 'Cloud & DevOps',
    description: 'Deploy and manage applications on AWS, Azure, and GCP. CI/CD pipeline implementation.',
    imageUrl: pic5,
    advanced: ['AWS/GCP', 'Docker', 'Kubernetes', 'CI/CD Pipelines']
  },
  {
    id: 6,
    title: 'E-commerce Solutions',
    description: 'Full-featured online stores with payment integration, inventory management, and analytics.',
    imageUrl: pic6,
    advanced: ['Stripe Integration', 'Inventory Mgmt', 'Shipping APIs', 'Order Tracking']
  },
];

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div id="services" className="bg-gray-800 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
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
            My <span className="text-blue-400">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Offering comprehensive solutions from concept to deployment with advanced technologies and best practices.
          </p>
          <div className="h-1 w-20 bg-blue-400 mx-auto mt-6"></div>
        </motion.div>

        {/* Services Carousel/Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map(service => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-700 hover:border-blue-400 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.advanced.slice(0, 2).map((tech, idx) => (
                    <span key={idx} className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <Slider {...settings}>
            {services.map(service => (
              <div key={service.id} className="px-2">
                <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-700">
                  <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.advanced.slice(0, 2).map((tech, idx) => (
                        <span key={idx} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Services;
