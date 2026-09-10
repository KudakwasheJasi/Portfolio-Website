import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/IMAGES/Blog 9.jpg';
import codingImage from '../assets/IMAGES/About logo.jpg';

const About = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "I'm a passionate web developer with expertise in React, Node.js, and cloud technologies. I create scalable, high-performance applications.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 20);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const skills = [
    { category: 'Frontend', items: ['React', 'Vue.js', 'Tailwind CSS', 'JavaScript'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'] },
    { category: 'Advanced', items: ['GraphQL', 'Docker', 'AWS', 'Microservices'] },
    { category: 'Tools', items: ['Git', 'VSCode', 'Webpack', 'Jest Testing'] }
  ];

  return (
    <div id="about" className="bg-gray-900 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="h-1 w-20 bg-blue-400 mx-auto"></div>
        </motion.div>

        {/* About Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-75"></div>
              <img 
                src={profilePic} 
                alt="Profile" 
                className="relative w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={containerVariants} className="text-white">
            <motion.h3 
              className="text-3xl font-bold mb-4"
              variants={itemVariants}
            >
              Kudakwashe Jasi
            </motion.h3>

            <motion.div 
              className="h-20 mb-6"
              variants={itemVariants}
            >
              <p className="text-lg text-gray-300">
                {typedText}
                <span className="animate-pulse">|</span>
              </p>
            </motion.div>

            <motion.div className="space-y-4" variants={containerVariants}>
              <motion.p className="text-gray-400 leading-relaxed" variants={itemVariants}>
                With over 3 years of experience in web development, I've worked on projects ranging from startups to enterprise solutions. My focus is on writing clean, maintainable code and delivering exceptional user experiences.
              </motion.p>

              <motion.p className="text-gray-400 leading-relaxed" variants={itemVariants}>
                I'm passionate about learning new technologies and staying updated with industry trends. When I'm not coding, you'll find me contributing to open source, reading tech blogs, or exploring new frameworks.
              </motion.p>

              <motion.div className="flex flex-wrap gap-2 pt-4" variants={itemVariants}>
                {['React', 'JavaScript', 'Node.js', 'MongoDB', 'AWS', 'Docker'].map((tech, idx) => (
                  <span key={idx} className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-400 transition-colors duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <h4 className="text-xl font-bold text-blue-400 mb-4">{skillGroup.category}</h4>
              <ul className="space-y-2">
                {skillGroup.items.map((skill, sidx) => (
                  <li key={sidx} className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
