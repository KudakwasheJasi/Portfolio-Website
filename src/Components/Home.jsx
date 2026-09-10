import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HomeNew = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Hi, I'm Kudakwashe Jasi, a passionate web developer focused on creating user-friendly and dynamic web solutions.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 30);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className="pt-16 bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen flex items-center">
      <motion.div
        className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Hero Section */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center" variants={itemVariants}>
          {/* Left Content */}
          <div className="text-white">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight"
              variants={itemVariants}
            >
              Welcome to <span className="text-blue-400">Code Studio</span>
            </motion.h1>

            <motion.div className="h-24 mb-6" variants={itemVariants}>
              <p className="text-lg sm:text-xl text-gray-300 min-h-12">
                {typedText}
                <span className="animate-pulse">|</span>
              </p>
            </motion.div>

            <motion.p 
              className="text-base sm:text-lg text-gray-400 mb-8"
              variants={itemVariants}
            >
              Explore my projects, services, and how I can help you build something great with modern web technologies!
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 w-full sm:w-auto">
                View My Work
              </button>
              <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 w-full sm:w-auto">
                Get In Touch
              </button>
            </motion.div>
          </div>

          {/* Right Side - Animated Illustration/Image */}
          <motion.div 
            className="hidden md:block"
            variants={itemVariants}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-1 shadow-2xl">
              <div className="bg-gray-800 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <svg className="w-32 h-32 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.343a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM16.657 15.657a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM11 17a1 1 0 102 0v-1a1 1 0 10-2 0v1zM5.343 15.657a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707zM5 10a1 1 0 01-1-1V8a1 1 0 012 0v1a1 1 0 01-1 1zM5.343 5.343a1 1 0 01-1.414 1.414L3.222 6.05a1 1 0 011.414-1.414l.707.707z" />
                  </svg>
                  <p className="text-xl font-semibold">Web Developer</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 md:mt-24"
          variants={containerVariants}
        >
          {[
            { label: 'Projects', value: '25+' },
            { label: 'Clients', value: '15+' },
            { label: 'Years Exp.', value: '3+' },
            { label: 'Satisfaction', value: '100%' }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              className="bg-gray-700 rounded-lg p-6 text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">{stat.value}</p>
              <p className="text-gray-300 text-sm sm:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomeNew;
