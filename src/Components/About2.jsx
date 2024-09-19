import React from 'react';


// Import images
import Abot1 from '../assets/IMAGES/dribbble.svg';
import Abot2 from '../assets/IMAGES/About logo.jpg';
import Abot3 from '../assets/IMAGES/Vector.svg';

// Data for mapping with more information and background colors
const data = [
  {
    id: 1,
    src: Abot1,
    alt: 'Dribbble Icon',
    description: 'Dribbble is a community of designers sharing screenshots of their work, process, and projects.',
    additionalInfo: 'We use Dribbble to showcase our design work and connect with other creatives in the industry.',
    backgroundColor: '#f0f4f8' // Light grey
  },
  {
    id: 2,
    src: Abot2,
    alt: 'About Logo',
    description: 'This logo represents our brand and commitment to excellence in design and development.',
    additionalInfo: 'Our logo is crafted to reflect our values and the quality we deliver in every project.',
    backgroundColor: '#e3f2fd' // Light blue
  },
  {
    id: 3,
    src: Abot3,
    alt: 'Vector Icon',
    description: 'Vector graphics are essential for high-quality, scalable designs that look great on any device.',
    additionalInfo: 'We use vector graphics for all our designs to ensure they are crisp and clear at any resolution.',
    backgroundColor: '#fffde7' // Light yellow
  }
];

const About2 = () => {
  return (
    <div className="about1-container p-6 relative overflow-hidden">
      <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>

      <div className="info-section flex flex-wrap gap-6 justify-center relative z-10">
        {data.map((item) => (
          <div
            key={item.id}
            className="info-item bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow p-4 w-full sm:w-1/2 lg:w-1/3"
            style={{ backgroundColor: item.backgroundColor }} // Apply background color
          >
            <img src={item.src} alt={item.alt} className="w-3/4 h-auto mx-auto mb-2" /> {/* Adjust size and center image */}
            <h2 className="text-xl font-semibold mb-2 text-center">{item.alt}</h2>
            <p className="text-center mb-2">{item.description}</p>
            <p className="text-center text-gray-700">{item.additionalInfo}</p>
          </div>
        ))}
      </div>

      {/* Add falling water drops */}
      <div className="water-effect">
        <div className="drop"></div>
        <div className="drop"></div>
        <div className="drop"></div>
        <div className="drop"></div>
        <div className="drop"></div>
      </div>
    </div>
  );
}

export default About2;
