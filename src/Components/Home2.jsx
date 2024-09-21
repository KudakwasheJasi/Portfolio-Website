import React from 'react';
import Slider from "react-slick"; // For the carousel
import { useSpring, animated } from '@react-spring/web'; // For animations
import hompic1 from '../assets/IMAGES/hom1.jpg';
import hompic2 from '../assets/IMAGES/hom7.jpg';
import hompic3 from '../assets/IMAGES/hom3.jpg';
import hompic4 from '../assets/IMAGES/hom2.jpg';
import hompic5 from '../assets/IMAGES/hom5.jpg';
import hompic6 from '../assets/IMAGES/hom4.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const images = [
  { src: hompic1, info: "Explore beautiful scenery and nature's wonders." },
  { src: hompic2, info: "Capture the vibrant colors of city landscapes." },
  { src: hompic3, info: "Experience the calm and peaceful beach views." },
  { src: hompic4, info: "Discover architectural marvels from around the world." },
  { src: hompic5, info: "Witness breathtaking sunset moments by the sea." },
  { src: hompic6, info: "Enjoy adventurous and thrilling outdoor activities." }
];

const Home2 = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    loop: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <animated.div style={fadeIn} className="overflow-hidden">
      <h2 className="text-center text-2xl font-bold mb-6">Welcome to Home2</h2>
      <div className="shadow-lg p-4 rounded-lg">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="p-4">
              <img 
                src={image.src} 
                alt={`Home image ${index + 1}`} 
                className="w-full h-48 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105" 
              />
              <p className="text-center mt-4 text-gray-700 text-sm font-medium">{image.info}</p>
              <p className="text-center text-xs text-gray-500 mt-2">Image {index + 1}: This picture is a glimpse into some of the most breathtaking views you can imagine.</p>
            </div>
          ))}
        </Slider>
      </div>
    </animated.div>
  );
};

export default Home2;
